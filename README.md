# Cursor Memory Bank

Cursor Memory Bank is a powerful feature that enhances AI assistance by maintaining perfect documentation between sessions. It addresses AI's session memory limitations by creating a structured documentation system that serves as the AI's persistent memory.

## Installation

### Option 1: Using npx (Recommended)

Run the following command in your project root directory:

```bash
npx cursor-bank init
```

This will automatically:
1. Copy the `.cursor/rules` directory to your project
2. Create a `memory-bank` directory in your project root

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
https://github.com/tacticlaunch/cursor-bank/tree/main/.cursor/rules
</details>

## After Installation

- For exists project write to Cursor agent - **initialize memory bank**
- For new project I would recommend this flow:
  - Write to Cursor agent
      ```
      PLAN

      <Describe your details of the project that you want to build>
      ```
   - After Cursor agent end its speach write to it - **initialize memory bank**

## Usage

### Basic Commands

- `PLAN` - Enter or return to plan mode
- `ACT` - Approve plan and switch to implementation mode
- `update memory bank` - Trigger documentation update

## Links

[tacticlaunch/mcp-linear](https://github.com/tacticlaunch/mcp-linear) - If you are a developer seeking to enhance your workflow with Linear, consider giving it a try.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
