**Overview**

This repository contains the codebase and tools for managing employee leave plans efficiently. The system automates leave tracking, planning, and reporting while integrating with tools like Google Sheets to ensure seamless operation. The repository is divided into three key components: Code, Table, and UI.

**Key Features**

- Leave Management Automation: Tracks leave quotas, usage, and balances automatically.
- Dynamic Table Integration: Synchronizes leave data across multiple sheets for easy access.
- Interactive UI: Provides user-friendly menus and tools to simplify leave management.

**Repository Structure**

**1. Code**

This folder contains the main logic and scripts for automating the leave planning process.

**Key Features:**

- Calculate leave entitlements, used leave, and remaining leave dynamically.
- Synchronize leave data with external files or sheets.
- Exclude public holidays and special leave types (e.g., unpaid leave, collective leave).

**Functions Included:**

- Leave quota updates.
- Integration with attendance tracking systems.
- Automation of leave balance calculations.
  
**2. Table**

This folder contains preconfigured Google Sheets templates or examples for managing leave data.

**Key Columns:**

- Employee Details: Name, Position, Join Date.
- Leave Records: Leave Quota, Used Leave, Remaining Leave.
- Leave Types: Annual Leave (Cuti Tahunan), Replacement Leave (Cuti Pengganti), Unpaid Leave (Cuti Tidak Berbayar).

**Use Case:**

- Import and customize these templates to match your organization’s requirements.
- Track leave balances dynamically using the linked scripts.
  
**3. UI**

This folder includes scripts for the user interface, providing an interactive way to manage leave plans.

**Features:**

- Custom menus in Google Sheets for managing leave plans.
- Real-time search functionality to find specific employee leave details.
- Tools for generating leave reports and summaries.
