import { useState } from 'react';
import { createClient } from '@/lib/api';
import { useToast } from '@/hooks/use-toast';
import { Upload, UserCircle } from 'lucide-react';

const AddClientPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    designation: '',
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
      data.append('designation', formData.designation);
      data.append('image', image);

      await createClient(data);
      toast({
        title: 'Success!',
        description: 'Client testimonial added successfully.',
      });
      setFormData({ name: '', description: '', designation: '' });
      setImage(null);
      setImagePreview(null);
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to add client. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-background rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-foreground mb-6">Add New Client</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Client Photo
            </label>
            <div 
              className="border-2 border-dashed border-border rounded-lg p-8 text-center cursor-pointer hover:border-primary transition-colors"
              onClick={() => document.getElementById('client-image')?.click()}
            >
              {imagePreview ? (
                <img 
                  src={imagePreview} 
                  alt="Preview" 
                  className="mx-auto w-32 h-32 rounded-full object-cover"
                />
              ) : (
                <div className="space-y-4">
                  <UserCircle className="w-16 h-16 mx-auto text-muted-foreground" />
                  <div>
                    <span className="text-primary font-medium">Click to upload</span>
                    <span className="text-muted-foreground"> client photo</span>
                  </div>
                  <p className="text-xs text-muted-foreground">PNG, JPG up to 5MB</p>
                </div>
              )}
            </div>
            <input
              id="client-image"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </div>

          {/* Client Name */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Client Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter client name"
              className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>

          {/* Designation */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Designation
            </label>
            <input
              type="text"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              required
              placeholder="e.g., CEO, Marketing Manager"
              className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>

          {/* Testimonial */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Testimonial
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows={4}
              placeholder="Enter client testimonial"
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
            {isSubmitting ? 'Adding Client...' : 'Add Client'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddClientPage;
