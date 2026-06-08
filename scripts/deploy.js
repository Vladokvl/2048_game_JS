#!/usr/bin/env node
const { execSync } = require('child_process');
const fs = require('fs');

function run(cmd, opts = {}) {
  try {
    console.log(`> ${cmd}`);
    execSync(cmd, { stdio: 'inherit', ...opts });
    return true;
  } catch (err) {
    return err;
  }
}

function main() {
  console.log('Start deploy to gh-pages. Please wait, it may take up to minute.\n');

  // Build
  const buildResult = run('npm run build');
  if (buildResult instanceof Error) {
    console.error('Build failed');
    process.exit(1);
  }

  // Add and commit dist
  const addResult = run('git add dist -f');
  if (addResult instanceof Error) {
    console.error('Failed to add dist');
    process.exit(1);
  }

  const commitResult = run('git commit -m "make build" --no-verify');
  if (commitResult instanceof Error) {
    console.log('Nothing to commit; creating empty commit for subtree deploy');
    const allowEmpty = run('git commit --allow-empty -m "make build" --no-verify');
    if (allowEmpty instanceof Error) {
      console.warn('Failed to create allow-empty commit; continuing');
    }
  }

  // Push to gh-pages (delete old branch if exists)
  const deleteResult = run('git push --delete origin gh-pages');
  if (deleteResult instanceof Error) {
    console.log("It's ok, gh-pages doesn't exists on GitHub");
  }

  // Subtree push
  const subtreeResult = run('git subtree push --prefix dist origin gh-pages');
  if (subtreeResult instanceof Error) {
    console.error('Subtree push failed');
    process.exit(1);
  }

  // Cleanup: try to reset soft HEAD^ and restore working tree
  try {
    run('git reset --soft HEAD^');
    // Remove dist dir
    try {
      fs.rmSync('dist', { recursive: true, force: true });
    } catch (e) {
      // ignore
    }
    run('git reset -- dist');
    run('git checkout -- ./dist');
  } catch (e) {
    // ignore cleanup errors
  }

  console.log('\nSuccessfully deployed to gh-pages!\n');
}

main();
