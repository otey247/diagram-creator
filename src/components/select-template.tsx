import React, { FunctionComponent } from "react";
import { TemplateEnum } from "@/lib/prompt-by-template";

interface ITemplate {
  label: string;
  value: TemplateEnum;
}

export const templates: ITemplate[] = [
  { label: "Flowchart", value: TemplateEnum.FLOWCHART },
  { label: "Mindmap", value: TemplateEnum.MINDMAP },
  { label: "Timeline", value: TemplateEnum.TIMELINE },
  { label: "User Journey", value: TemplateEnum.USERJOURNEY },
  { label: "Class Diagram", value: TemplateEnum.CLASS },
  { label: "Kanban", value: TemplateEnum.KANBAN },
  { label: "Entity Relationship", value: TemplateEnum.ENTITYRELATIONSHIP },
  { label: "Sequence Diagram", value: TemplateEnum.SEQUENCE },
  { label: "State Diagram", value: TemplateEnum.STATE },
  { label: "Gantt Chart", value: TemplateEnum.GANTT },
  { label: "Quandrant Chart", value: TemplateEnum.QUANDRANT },
  { label: "Sankey Diagram", value: TemplateEnum.SANKEY },
  { label: "Architecture Diagram", value: TemplateEnum.ARCHITECTURE },
  // { label: "Class Diagram", value: TemplateEnum.CLASS }, // FIXME: syntax mistake is pretty common for this
];

interface ISelectTemplate {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectTemplate: FunctionComponent<ISelectTemplate> = ({ onChange }) => {
  return (
    <select onChange={onChange} className="select select-bordered select-lg">
      {templates.map((item) => (
        <option value={item.value} key={item.label}>
          {item.label}
        </option>
      ))}
    </select>
  );
};

export default SelectTemplate;
