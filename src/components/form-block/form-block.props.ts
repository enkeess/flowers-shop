
export interface FormBlockProps {
	type: "text" | "tel" | "date" | "email" | "select" | "toggle";
	title: string;
	name?: string;
	selectData?: string[];
	content? :string[];
}