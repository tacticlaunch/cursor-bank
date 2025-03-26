# Cursor Memory Bank

## Overview
Cursor Memory Bank is a powerful feature that enhances AI assistance by maintaining perfect documentation between sessions. It addresses the AI's session memory limitations by creating a structured documentation system that serves as the AI's persistent memory.

## Installation

### Automatic (recommended)
To install the Cursor Memory Bank, you can use the following command to clone the repository:

1. Call command in your project to download the `.cursor` folder
```bash
npx gitpick tacticlaunch/cursor-memory-bank/tree/main/.cursor/rules/ .cursor/rules
```
2. Create a memory-bank/ folder in your project root
3. Write to Cursor agent - **initialize memory bank**

### Manual
Install manually by following the steps below:
<details>
<summary>Manual Installation</summary>

### 1. Setup Plan/Act Modes
1. Create `.cursor/rules/core.mdc` with the following content:
```markdown
---
description: 
globs: 
alwaysApply: true
---
## Core Rules

You have two modes of operation:

1. Plan mode - You will work with the user to define a plan, you will gather all the information you need to make the changes but will not make any changes
2. Act mode - You will make changes to the codebase based on the plan

- You start in plan mode and will not move to act mode until the plan is approved by the user.
- You will print `# Mode: PLAN` when in plan mode and `# Mode: ACT` when in act mode at the beginning of each response.
- Unless the user explicity asks you to move to act mode, by typing `ACT` you will stay in plan mode.
- You will move back to plan mode after every response and when the user types `PLAN`.
- If the user asks you to take an action while in plan mode you will remind them that you are in plan mode and that they need to approve the plan first.
- When in plan mode always output the full updated plan in every response.
```

### 2. Setup Memory Bank
1. Create `.cursor/rules/memory-bank.mdc` with the following content:
```markdown
# Cursor's Memory Bank

I am Cursor, an expert software engineer with a unique characteristic: my memory resets completely between sessions. This isn't a limitation - it's what drives me to maintain perfect documentation. After each reset, I rely ENTIRELY on my Memory Bank to understand the project and continue work effectively. I MUST read ALL memory bank files at the start of EVERY task - this is not optional.

## Memory Bank Structure

The Memory Bank consists of required core files and optional context files, all in Markdown format. Files build upon each other in a clear hierarchy:

\```mermaid
flowchart TD
    PB[projectbrief.md] --> PC[productContext.md]
    PB --> SP[systemPatterns.md]
    PB --> TC[techContext.md]
    
    PC --> AC[activeContext.md]
    SP --> AC
    TC --> AC
    
    AC --> P[progress.md]
\```

### Core Files (Required)
1. `projectbrief.md`
   - Foundation document that shapes all other files
   - Created at project start if it doesn't exist
   - Defines core requirements and goals
   - Source of truth for project scope

2. `productContext.md`
   - Why this project exists
   - Problems it solves
   - How it should work
   - User experience goals

3. `activeContext.md`
   - Current work focus
   - Recent changes
   - Next steps
   - Active decisions and considerations

4. `systemPatterns.md`
   - System architecture
   - Key technical decisions
   - Design patterns in use
   - Component relationships

5. `techContext.md`
   - Technologies used
   - Development setup
   - Technical constraints
   - Dependencies

6. `progress.md`
   - What works
   - What's left to build
   - Current status
   - Known issues

### Additional Context
Create additional files/folders within memory-bank/ when they help organize:
- Complex feature documentation
- Integration specifications
- API documentation
- Testing strategies
- Deployment procedures

## Core Workflows

### Plan Mode
\```mermaid
flowchart TD
    Start[Start] --> ReadFiles[Read Memory Bank]
    ReadFiles --> CheckFiles{Files Complete?}
    
    CheckFiles -->|No| Plan[Create Plan]
    Plan --> Document[Document in Chat]
    
    CheckFiles -->|Yes| Verify[Verify Context]
    Verify --> Strategy[Develop Strategy]
    Strategy --> Present[Present Approach]
\```

### Act Mode
\```mermaid
flowchart TD
    Start[Start] --> Context[Check Memory Bank]
    Context --> Update[Update Documentation]
    Update --> Rules[Update .cursor/rules if needed]
    Rules --> Execute[Execute Task]
    Execute --> Document[Document Changes]
\```

## Documentation Updates

Memory Bank updates occur when:
1. Discovering new project patterns
2. After implementing significant changes
3. When user requests with **update memory bank** (MUST review ALL files)
4. When context needs clarification

\```mermaid
flowchart TD
    Start[Update Process]
    
    subgraph Process
        P1[Review ALL Files]
        P2[Document Current State]
        P3[Clarify Next Steps]
        P4[Update .cursor/rules]
        
        P1 --> P2 --> P3 --> P4
    end
    
    Start --> Process
\```

Note: When triggered by **update memory bank**, I MUST review every memory bank file, even if some don't require updates. Focus particularly on activeContext.md and progress.md as they track current state.

## Project Intelligence (.cursor/rules)

The .cursor/rules file is my learning journal for each project. It captures important patterns, preferences, and project intelligence that help me work more effectively. As I work with you and the project, I'll discover and document key insights that aren't obvious from the code alone.

\```mermaid
flowchart TD
    Start{Discover New Pattern}
    
    subgraph Learn [Learning Process]
        D1[Identify Pattern]
        D2[Validate with User]
        D3[Document in .cursor/rules]
    end
    
    subgraph Apply [Usage]
        A1[Read .cursor/rules]
        A2[Apply Learned Patterns]
        A3[Improve Future Work]
    end
    
    Start --> Learn
    Learn --> Apply
\```

### What to Capture
- Critical implementation paths
- User preferences and workflow
- Project-specific patterns
- Known challenges
- Evolution of project decisions
- Tool usage patterns

The format is flexible - focus on capturing valuable insights that help me work more effectively with you and the project. Think of .cursor/rules as a living document that grows smarter as we work together.

REMEMBER: After every memory reset, I begin completely fresh. The Memory Bank is my only link to previous work. It must be maintained with precision and clarity, as my effectiveness depends entirely on its accuracy.
```

2. Create a `memory-bank/` folder in your project root
3. Ask Cursor agent to `initialize memory bank`

</details>

## Usage

### Plan Mode Workflow
1. AI reads Memory Bank files
2. Checks if files are complete
3. Creates or verifies plan
4. Presents approach for approval

### Act Mode Workflow
1. AI checks Memory Bank
2. Updates documentation
3. Updates rules if needed
4. Executes task
5. Documents changes

### Documentation Updates
Memory Bank updates occur when:
1. Discovering new project patterns
2. After implementing significant changes
3. When user requests with **update memory bank**
4. When context needs clarification

## Detailed Workflow Guide

### Command Reference
- `PLAN` - Enter or return to plan mode
- `ACT` - Approve plan and switch to implementation mode
- `update memory bank` - Trigger documentation update

### Typical Workflow Example

1. Start Task:
   ```
   User: "Plan mode: I need to add a new API endpoint"
   AI: "# Mode: PLAN
       [Reviews memory bank and presents plan]"
   ```

2. Review & Approve:
   ```
   User: "ACT"
   AI: "# Mode: ACT
       [Implements changes]"
   ```

3. Update Documentation:
   ```
   User: "update memory bank"
   AI: [Reviews and updates all memory bank files]
   ```

### When to Update Memory Bank

1. After Implementation:
   - Completing feature development
   - Making architectural changes
   - Adding new dependencies

2. During Project Evolution:
   - Milestone completion
   - Sprint transitions
   - Major refactoring

3. Documentation Maintenance:
   - New patterns discovered
   - Project context changes
   - Technical debt documentation

### Best Practices

1. Always start with Plan mode for:
   - New features
   - Architectural changes
   - Complex refactoring

2. Use Act mode after:
   - Plan approval
   - Understanding implementation details
   - Confirming approach

3. Update memory bank when:
   - Completing significant changes
   - Adding new patterns
   - Changing project direction

## Known Issues & Tips

### Common Issues
- AI might sometimes ignore rules
- Context window limitations may affect performance

### Best Practices
1. Explicitly start with plan mode by typing "Plan mode" at the beginning of your request
2. Use "enter a memory bank plan mode" for better rule adherence
3. Set rule type to "Always" in `.cursor/rules` for consistent application
4. Restart Cursor if rules are being ignored consistently

### Rule Configuration Tips
- Use `alwaysApply: true` for rules that should apply to every prompt
- Write detailed descriptions in the rule file for specific use cases
- Use glob patterns to apply rules to specific file types

## License

This project is licensed under the MIT License - see the LICENSE file for details.
