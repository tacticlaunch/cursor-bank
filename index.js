#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const os = require('os');
const { simpleGit } = require('simple-git');
const { program } = require('commander');
const { version } = require('./package.json');
const _debug = require('debug');
const debug = require('debug')('cursor-bank');

const git = simpleGit();

// Configuration
const config = {
  repoUrl: 'https://github.com/tacticlaunch/cursor-memory-bank',
  sourcePath: '.cursor/rules',
  targetPath: '.cursor/rules',
  branch: 'main'
};

// Custom logger function
const log = {
  info: (message) => console.log(message),
  debug: (message) => debug(message),
  error: (message) => console.error(message)
};

async function cloneAndCopy(options) {
  // Enable debug logging if the debug flag is set
  if (options.debug) {
    _debug.enable('cursor-bank');
    debug('Debug mode enabled');
  }
  
  // Create a temporary directory
  const tempDir = path.join(os.tmpdir(), `cursor-memory-bank-${Date.now()}`);
  
  log.debug(`Creating temporary directory: ${tempDir}`);
  
  try {
    // Clone the repository
    log.info(`Cloning repository...`);
    log.debug(`Cloning from ${config.repoUrl} branch ${config.branch}`);
    
    await git.clone(config.repoUrl, tempDir, [
      '--depth', '1',
      '--single-branch',
      '--branch', config.branch
    ]);
    
    // Path to source directory in the cloned repo
    const sourcePath = path.join(tempDir, config.sourcePath);
    
    // Path to target directory in current working directory
    const targetPath = path.join(process.cwd(), config.targetPath);
    
    // Check if source exists
    if (!fs.existsSync(sourcePath)) {
      throw new Error(`Source path ${config.sourcePath} not found in repository`);
    }
    
    // Create target directory if it doesn't exist
    log.info(`Copying rules to ${config.targetPath}...`);
    log.debug(`Full source path: ${sourcePath}`);
    log.debug(`Full target path: ${targetPath}`);
    
    await fs.ensureDir(path.dirname(targetPath));
    
    // Copy directory
    await fs.copy(sourcePath, targetPath);
    
    log.debug(`Successfully copied ${config.sourcePath} to ${targetPath}`);

    // Create memory-bank directory if it doesn't exist
    const memoryBankPath = path.join(process.cwd(), 'memory-bank');
    if (!fs.existsSync(memoryBankPath)) {
      log.info('Creating memory-bank directory...');
      await fs.ensureDir(memoryBankPath);
      log.debug('Successfully created memory-bank directory');
    } else {
      log.debug('memory-bank directory already exists');
    }

    log.info('\n✅ Setup complete! You can now use the Cursor Memory Bank.');
    log.info('To initialize the memory bank, type "initialize memory bank" to your Cursor assistant.');
    
  } catch (error) {
    log.error('An error occurred:');
    log.error(error.message);
    if (options.debug) {
      log.debug(error.stack);
    }
    process.exit(1);
  } finally {
    // Clean up temporary directory
    if (fs.existsSync(tempDir)) {
      log.debug(`Cleaning up temporary directory: ${tempDir}`);
      await fs.remove(tempDir);
    }
  }
}

// Setup CLI commands
program
  .name('cursor-bank')
  .description('Cursor Memory Bank installer and utilities')
  .version(version);

program
  .command('init')
  .description('Initialize Cursor Memory Bank in the current project')
  .option('-d, --debug', 'Enable debug output')
  .action((options) => {
    log.info('Initializing Cursor Memory Bank...');
    cloneAndCopy(options);
  });

// If no arguments provided, show help
if (process.argv.length === 2) {
  program.help();
}

program.parse();