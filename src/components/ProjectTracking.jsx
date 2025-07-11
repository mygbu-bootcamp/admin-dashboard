import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Briefcase, DollarSign, Calendar, Users } from 'lucide-react';

const ProjectTracking = () => {
  const projects = [
    {
      id: 1,
      title: 'AI Research Initiative',
      pi: 'Dr. Smith',
      funding: '₹5,00,000',
      status: 'Active',
      startDate: '2024-01-01',
      endDate: '2024-12-31',
      progress: 65,
      agency: 'DST'
    },
    {
      id: 2,
      title: 'IoT Smart Campus',
      pi: 'Prof. Johnson',
      funding: '₹8,50,000',
      status: 'Planning',
      startDate: '2024-02-01',
      endDate: '2025-01-31',
      progress: 10,
      agency: 'AICTE'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Project Tracking</h1>
        <Button>Add New Project</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="flex items-center p-6">
            <Briefcase className="h-8 w-8 text-blue-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Active Projects</p>
              <p className="text-2xl font-bold text-gray-900">24</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center p-6">
            <DollarSign className="h-8 w-8 text-green-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Funding</p>
              <p className="text-2xl font-bold text-gray-900">₹2.4Cr</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center p-6">
            <Calendar className="h-8 w-8 text-yellow-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Due This Month</p>
              <p className="text-2xl font-bold text-gray-900">6</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center p-6">
            <Users className="h-8 w-8 text-purple-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">PIs Involved</p>
              <p className="text-2xl font-bold text-gray-900">18</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Research Projects</CardTitle>
          <CardDescription>Track research and development projects</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Input placeholder="Search projects..." className="max-w-sm" />
            <div className="space-y-2">
              {projects.map((project) => (
                <div key={project.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div>
                      <p className="font-medium">{project.title}</p>
                      <p className="text-sm text-gray-500">PI: {project.pi} | {project.agency}</p>
                    </div>
                    <Badge variant="outline">{project.funding}</Badge>
                    <Badge variant={
                      project.status === 'Active' ? 'default' : 
                      project.status === 'Planning' ? 'secondary' : 'destructive'
                    }>
                      {project.status}
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right text-sm">
                      <p>Progress: {project.progress}%</p>
                      <p className="text-gray-500">{project.startDate} - {project.endDate}</p>
                    </div>
                    <Button size="sm" variant="outline">View</Button>
                    <Button size="sm">Update</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectTracking;