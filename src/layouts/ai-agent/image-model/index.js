import { useState } from 'react';
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';
import { Input } from 'components/ui/input';
import { Button } from 'components/ui/button';
import { Card } from 'components/ui/card';
import { Settings, ArrowUp, MessageSquare } from 'lucide-react';

const suggestedPrompts = [
  "Find images that belong to Jeff Murray?",
  "Show me bill AB1281861",
  "Show me a summary of Jeff Murray's latest bill"
];

function ImageModel() {
  const [query, setQuery] = useState('');

  const handlePromptClick = (prompt) => {
    setQuery(prompt);
  };

  const handleSubmit = () => {
    if (query.trim()) {
      console.log('Query submitted:', query);
    }
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <div className="max-w-4xl mx-auto p-8 space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl">Good morning, Alice</h1>
          <h2 className="text-2xl text-blue-500">What Bizbeam assistant can I help with?</h2>
        </div>

        <Card className="p-6">
          <div className="relative">
            <Input
              placeholder="Ask Bizbeam Assistant about your images..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="text-lg py-6 pr-16 bg-gray-50 border-0 focus:bg-white transition-colors"
              onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
              <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                <Settings className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                className="h-8 w-8 p-0 bg-gray-200 hover:bg-gray-300 text-gray-600"
                onClick={handleSubmit}
              >
                <ArrowUp className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>

        <div className="space-y-3">
          {suggestedPrompts.map((prompt, index) => (
            <button
              key={index}
              onClick={() => handlePromptClick(prompt)}
              className="w-full text-left p-4 rounded-lg border hover:bg-gray-50 transition-colors flex items-center gap-3 group"
            >
              <MessageSquare className="h-4 w-4 text-gray-400 group-hover:text-gray-600" />
              <span className="text-gray-700 group-hover:text-gray-900">{prompt}</span>
            </button>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}

export default ImageModel;
