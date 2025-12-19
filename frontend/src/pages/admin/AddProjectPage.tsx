import { useState } from 'react';
import { createProject } from '@/lib/api';
import { useToast } from '@/hooks/use-toast';
import { Upload, ImageIcon } from 'lucide-react';

const AddProjectPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
  });
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!image) {
      toast({
        title: 'Error',
        description: 'Please select an image.',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const data = new FormData();
      data.append('name', formData.name);
      data.append('description', formData.description);
      data.append('image', image);

      await createProject(data);
      toast({
        title: 'Success!',
        description: 'Project added successfully.',
      });
      setFormData({ name: '', description: '' });
      setImage(null);
      setImagePreview(null);
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to add project. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-background rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-foreground mb-6">Add New Project</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Project Image
            </label>
            <div 
              className="border-2 border-dashed border-border rounded-lg p-8 text-center cursor-pointer hover:border-primary transition-colors"
              onClick={() => document.getElementById('project-image')?.click()}
            >
              {imagePreview ? (
                <img 
                  src={imagePreview} 
                  alt="Preview" 
                  className="mx-auto max-h-48 rounded-lg object-cover"
                />
              ) : (
                <div className="space-y-4">
                  <ImageIcon className="w-12 h-12 mx-auto text-muted-foreground" />
                  <div>
                    <span className="text-primary font-medium">Click to upload</span>
                    <span className="text-muted-foreground"> or drag and drop</span>
                  </div>
                  <p className="text-xs text-muted-foreground">PNG, JPG up to 10MB</p>
                </div>
              )}
            </div>
            <input
              id="project-image"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </div>

          {/* Project Name */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Project Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter project name"
              className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows={4}
              placeholder="Enter project description"
              className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-accent text-accent-foreground py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
          >
            <Upload className="w-5 h-5" />
            {isSubmitting ? 'Adding Project...' : 'Add Project'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProjectPage;
