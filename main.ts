import { Plugin } from "obsidian";
import { Homework } from "./src/interfaces/Homework";

export default class HomeworkTrackerPlugin extends Plugin {
    private homeworkList: Homework[] = []; // Store the list of homework assignments

    async onload() {
		await this.addSampleHomework();
        console.log("Loading Homework Tracker Plugin");

        // Load saved homework data on initialization
        this.loadHomework();

        // Example: Log homework data (for debugging purposes)
        console.log("Loaded Homework List:", this.homeworkList);
    }

    async onunload() {
        console.log("Unloading Homework Tracker Plugin");
    }

    /**
     * Save homework data to local storage
     */
    private async saveHomework(): Promise<void> {
        try {
            await this.saveData(this.homeworkList);
            console.log("Homework data saved successfully!");
        } catch (error) {
            console.error("Error saving homework data:", error);
        }
    }

    /**
     * Load homework data from local storage
     */
    private async loadHomework(): Promise<void> {
        try {
            const savedData = await this.loadData();
            if (savedData) {
                this.homeworkList = savedData;
            }
            console.log("Homework data loaded successfully!");
        } catch (error) {
            console.error("Error loading homework data:", error);
        }
    }
	private async addSampleHomework() {
        const sampleHomework: Homework = {
            id: Date.now().toString(),
            title: "Finish Math Homework",
            dueDate: "2024-12-15",
            className: "Mathematics",
            isSubmitted: false,
            steps: ["Solve practice problems", "Review formulas", "Submit online"],
            priority: "High",
            group: false,
            links: ["https://example.com/assignment"],
        };
        this.homeworkList.push(sampleHomework);
        console.log("Sample homework added:", sampleHomework);
        await this.saveHomework();
    }

}