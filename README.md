**Overview**

The Employee Leave Plan repository provides a streamlined solution for managing and tracking employee leave data using Google Apps Script and Google Sheets. It is designed to integrate leave planning with real-time updates and custom functionalities, making it easier for organizations to manage leave requests, quotas, and balances.

**Key Features**

- Integration with Google Sheets: Automates leave management workflows directly within Google Sheets.
- Custom Leave Tracking: Tracks leave quotas, used leave, and remaining leave dynamically.
- Interactive User Interface: Provides a user-friendly interface for leave management and planning.
- Real-Time Synchronization: Updates and calculates leave balances in real time.

**Repository Structure**

**1. Code**

This file contains the core logic for the leave management system, including:

- Scripts for calculating leave quotas and balances.
- Functions for syncing data between Google Sheets and the Apps Script backend.
- Automated processes to handle requests, approvals, and updates.

**Key Features:**

- Leave balance calculations based on quotas and usage.
- Integration with leave policies (e.g., public holidays, collective leave).

**2. Table**

This file includes the Google Sheets templates used for managing leave data. The templates contain structured columns such as:

- Employee Information: Name, Position, Join Date, Email.
- Leave Quotas: Annual leave, special leave, unpaid leave.
- Leave Balances: Leave entitlement, used leave, and remaining leave.
- Logs: Tracks leave applications and approvals.

**3. UI**

This file holds scripts for the user interface, designed to improve the experience of interacting with the leave plan system.

**Features:**

- Custom menus in Google Sheets for leave management actions.
- Leave request submission and approval workflows.
- Search functionality to find leave details for specific employees.
- Real-time status updates for leave applications.
