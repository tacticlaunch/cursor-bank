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


<details>
<summary>Other options</summary>

### Option 2: Global Installation

```bash
npm install -g cursor-bank
```

2. Run the init command in your project:

```bash
cursor-bank init
```

### Option 3: Download Files Directly

You can also download the `.cursor/rules` directory manually from:
https://github.com/tacticlaunch/cursor-memory-bank/tree/main/.cursor/rules
</details>

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

## Links

[tacticlaunch/mcp-linear](https://github.com/tacticlaunch/mcp-linear) - If you are a developer seeking to enhance your workflow with Linear, consider giving it a try.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
