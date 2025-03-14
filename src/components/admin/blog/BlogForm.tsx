
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Blog post interface
interface BlogPost {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
}

interface BlogFormProps {
  initialPost: BlogPost;
  onSubmit: (post: BlogPost) => void;
  onCancel: () => void;
}

const BlogForm = ({ initialPost, onSubmit, onCancel }: BlogFormProps) => {
  const [post, setPost] = useState<BlogPost>(initialPost);

  useEffect(() => {
    setPost(initialPost);
  }, [initialPost]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(post);
  };

  return (
    <Card>
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input 
              id="title" 
              value={post.title} 
              onChange={(e) => setPost({...post, title: e.target.value})}
              required
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select 
                value={post.category}
                onValueChange={(value) => setPost({...post, category: value})}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Design">Design</SelectItem>
                  <SelectItem value="Development">Development</SelectItem>
                  <SelectItem value="Marketing">Marketing</SelectItem>
                  <SelectItem value="Business">Business</SelectItem>
                  <SelectItem value="Technology">Technology</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="author">Author</Label>
              <Input 
                id="author" 
                value={post.author} 
                onChange={(e) => setPost({...post, author: e.target.value})}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="date">Publish Date</Label>
              <Input 
                id="date" 
                type="date"
                value={post.date} 
                onChange={(e) => setPost({...post, date: e.target.value})}
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="excerpt">Excerpt</Label>
            <Textarea 
              id="excerpt" 
              value={post.excerpt} 
              onChange={(e) => setPost({...post, excerpt: e.target.value})}
              rows={2}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="content">Content</Label>
            <Textarea 
              id="content" 
              value={post.content} 
              onChange={(e) => setPost({...post, content: e.target.value})}
              rows={8}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="image">Feature Image URL</Label>
            <Input 
              id="image" 
              value={post.image} 
              onChange={(e) => setPost({...post, image: e.target.value})}
              required
            />
          </div>
          
          <div className="flex gap-2 justify-end">
            <Button type="button" variant="outline" onClick={onCancel}>
              Cancel
            </Button>
            <Button type="submit">
              {post.id ? "Update Post" : "Publish Post"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default BlogForm;
