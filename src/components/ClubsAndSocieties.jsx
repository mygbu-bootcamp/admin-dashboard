import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Users, Calendar, DollarSign, Award } from 'lucide-react';

const ClubsAndSocieties = () => {
  const clubs = [
    {
      id: 1,
      name: 'Computer Science Society',
      coordinator: 'Dr. Smith',
      members: 120,
      events: 8,
      budget: '₹25,000',
      status: 'Active'
    },
    {
      id: 2,
      name: 'Photography Club',
      coordinator: 'Prof. Johnson',
      members: 60,
      events: 5,
      budget: '₹15,000',
      status: 'Active'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Clubs & Societies</h1>
        <Button>Register New Club</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="flex items-center p-6">
            <Users className="h-8 w-8 text-blue-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Active Clubs</p>
              <p className="text-2xl font-bold text-gray-900">18</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center p-6">
            <Calendar className="h-8 w-8 text-green-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Events This Month</p>
              <p className="text-2xl font-bold text-gray-900">24</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center p-6">
            <DollarSign className="h-8 w-8 text-yellow-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Budget</p>
              <p className="text-2xl font-bold text-gray-900">₹4.2L</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center p-6">
            <Award className="h-8 w-8 text-purple-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Awards Won</p>
              <p className="text-2xl font-bold text-gray-900">12</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Club Management</CardTitle>
          <CardDescription>Manage student clubs and societies</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Input placeholder="Search clubs..." className="max-w-sm" />
            <div className="space-y-2">
              {clubs.map((club) => (
                <div key={club.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div>
                      <p className="font-medium">{club.name}</p>
                      <p className="text-sm text-gray-500">Coordinator: {club.coordinator}</p>
                    </div>
                    <Badge variant="outline">{club.members} members</Badge>
                    <Badge variant="secondary">{club.events} events</Badge>
                    <Badge variant="outline">{club.budget}</Badge>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="default">{club.status}</Badge>
                    <Button size="sm" variant="outline">Manage</Button>
                    <Button size="sm">View Events</Button>
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

export default ClubsAndSocieties;