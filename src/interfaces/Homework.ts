export interface Homework {
    id: string; // Unique identifier for the homework assignment
    title: string; // Title of the homework
    dueDate: string; // Due date (YYYY-MM-DD format)
    className: string; // Name of the class the homework is for
    isSubmitted: boolean; // Whether the homework is submitted
    steps: string[]; // Steps or tasks to complete the homework
    priority: string; // Priority level (e.g., "High", "Medium", "Low")
    group: boolean; // Indicates if it's a group assignment
    links: string[]; // Links to external resources (e.g., Google Docs, GitHub)
}