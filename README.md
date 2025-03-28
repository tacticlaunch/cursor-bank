# Cursor Memory Bank

A simple utility to install Cursor Memory Bank features in your project.

## What is Cursor Memory Bank?

Cursor Memory Bank is a powerful feature that enhances AI assistance by maintaining perfect documentation between sessions. It addresses AI's session memory limitations by creating a structured documentation system that serves as the AI's persistent memory.

## Installation

### Option 1: Using npx (Recommended)

Run the following command in your project root directory:

```bash
npx cursor-bank init
```

This will automatically:
1. Clone the required files from the repository
2. Copy the `.cursor/rules` directory to your project
3. Create a `memory-bank` directory in your project root
4. Set up the memory bank structure

### Option 2: Global Installation

1. Install the package globally:

```bash
npm install -g cursor-bank
```

2. Run the init command in your project:

```bash
cursor-bank init
```

### Option 3: Manual Installation

1. Clone this repository:

```bash
git clone https://github.com/tacticlaunch/cursor-memory-bank.git
```

2. Install dependencies and run the script:

```bash
cd cursor-memory-bank
npm install
npm start
```

## Command Options

The `init` command supports the following options:

```bash
cursor-bank init [options]
```

| Option | Description |
|--------|-------------|
| `-d, --debug` | Show detailed debug information during installation |
| `-h, --help` | Display help for command |
| `-V, --version` | Output the version number |

Example with debug output:
```bash
cursor-bank init --debug
```

### Option 3: Download Files Directly

You can also download the `.cursor/rules` directory manually from:
https://github.com/tacticlaunch/cursor-memory-bank/tree/main/.cursor/rules

## After Installation

After the installation is complete, you need to initialize the memory bank by typing to Cursor agent:
```
initialize memory bank
```

## Usage

### Basic Commands

- `PLAN` - Enter or return to plan mode
- `ACT` - Approve plan and switch to implementation mode
- `update memory bank` - Trigger documentation update

For detailed usage instructions, see the [full documentation](https://github.com/tacticlaunch/cursor-memory-bank).

## License

MIT
