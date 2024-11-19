# Generative AI Diagram Generator

A Next.js application that leverages generative ai to generate various types of diagrams using Mermaid syntax, including flowcharts, mindmaps, timelines, and more.

## Diagrams

Multiple diagram types supported:
- Flowcharts
- Mindmaps
- Timelines
- User Journey Maps
- Entity Relationship Diagrams
- Sequence Diagrams
- State Diagrams
- Gantt Charts
- Architecture Diagrams

## Features

- Interactive diagram viewing with zoom and pan capabilities
- Export options for SVG format and Mermaid code
- Dark theme optimized UI using DaisyUI
- Responsive design

## Prerequisites

- Node.js v18.10.0
- OpenAI API key
- Yarn package manager

## Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/diagram-generator.git
cd diagram-generator
```

2. Install dependencies:
```bash
yarn install
```

3. Set up environment variables:
```bash
cp env.template .env.local
```
Add your OpenAI API key to `.env.local`:
```
OPENAI_API_KEY=your_api_key_here
```

4. Start the development server:
```bash
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

1. Select a diagram type from the dropdown menu
2. Enter your diagram description in the input field
3. Click "Generate Flowchart" to create your diagram
4. Use the Export menu to:
   - Copy the Mermaid code
   - Download as SVG

## Tech Stack

- Next.js 13
- TypeScript
- OpenAI GPT-4
- Mermaid.js
- TailwindCSS
- DaisyUI
- React Zoom Pan Pinch

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
