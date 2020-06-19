const simpleGit = require('simple-git/promise')(process.cwd());
const chalk = require('chalk');
const R = require('ramda');

const checkIsDevelop = () =>
  simpleGit.revparse(['--abbrev-ref', 'HEAD']).then((branch) => {
    if (branch.trim() === 'develop') {
      return true;
    }

    return Promise.reject(
      new Error('You must be on the develop branch to auto release')
    );
  });

const checkNothingIsUnmerged = () =>
  simpleGit.diffSummary().then(({ files }) => {
    if (R.isEmpty(files)) {
      return true;
    }

    return Promise.reject(
      new Error('There is something unstaged, cannot perform release')
    );
  });

const perform = () =>
  checkIsDevelop()
    .then(checkNothingIsUnmerged)
    .then(async () => {
      const shortSha = await simpleGit
        .revparse(['--short', 'HEAD'])
        .then((str) => str.trim());

      console.log(chalk.yellow(`Tagging release candidate at rc-${shortSha}`));

      await simpleGit.tag([`rc-${shortSha}`]);

      await simpleGit.pushTags();

      console.log(
        chalk.green(`Released the release candidate at rc-${shortSha}`)
      );
    })
    .catch((err) => {
      console.log(chalk.red(err));
    });

perform();
