import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { BookOpen, Download, Users, Clock } from 'lucide-react';

const ELibrary = () => {
  const resources = [
    {
      id: 1,
      title: 'Advanced Computer Science',
      author: 'Dr. Smith',
      type: 'Book',
      category: 'Computer Science',
      downloads: 1200,
      status: 'Available'
    },
    {
      id: 2,
      title: 'IEEE Transactions on Software Engineering',
      author: 'IEEE',
      type: 'Journal',
      category: 'Engineering',
      downloads: 800,
      status: 'Restricted'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">E-Library</h1>
        <Button>Add Resource</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="flex items-center p-6">
            <BookOpen className="h-8 w-8 text-blue-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Resources</p>
              <p className="text-2xl font-bold text-gray-900">2,547</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center p-6">
            <Download className="h-8 w-8 text-green-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Downloads</p>
              <p className="text-2xl font-bold text-gray-900">15,689</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center p-6">
            <Users className="h-8 w-8 text-yellow-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Active Users</p>
              <p className="text-2xl font-bold text-gray-900">892</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center p-6">
            <Clock className="h-8 w-8 text-purple-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Overdue</p>
              <p className="text-2xl font-bold text-gray-900">23</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Digital Resources</CardTitle>
          <CardDescription>Manage digital library resources and access</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Input placeholder="Search resources..." className="max-w-sm" />
            <div className="space-y-2">
              {resources.map((resource) => (
                <div key={resource.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div>
                      <p className="font-medium">{resource.title}</p>
                      <p className="text-sm text-gray-500">by {resource.author}</p>
                    </div>
                    <Badge variant="outline">{resource.type}</Badge>
                    <Badge variant="secondary">{resource.category}</Badge>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right text-sm">
                      {resource.downloads} downloads
                      <Badge variant={resource.status === 'Available' ? 'default' : 'destructive'} className="ml-2">
                        {resource.status}
                      </Badge>
                    </div>
                    <Button size="sm" variant="outline">Preview</Button>
                    <Button size="sm">Manage</Button>
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

export default ELibrary;