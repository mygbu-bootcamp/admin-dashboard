import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Rocket, TrendingUp, DollarSign, Users } from 'lucide-react';

const StartupPanel = () => {
  const startups = [
    {
      id: 1,
      name: 'EduTech Solutions',
      founder: 'John Doe (CS2020001)',
      stage: 'Incubation',
      funding: '₹5,00,000',
      mentor: 'Dr. Smith',
      status: 'Active'
    },
    {
      id: 2,
      name: 'GreenEnergy Pro',
      founder: 'Jane Smith (ME2019045)',
      stage: 'Seed',
      funding: '₹2,50,000',
      mentor: 'Prof. Johnson',
      status: 'Under Review'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Startup Panel</h1>
        <Button>Submit Proposal</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="flex items-center p-6">
            <Rocket className="h-8 w-8 text-blue-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Active Startups</p>
              <p className="text-2xl font-bold text-gray-900">12</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center p-6">
            <TrendingUp className="h-8 w-8 text-green-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Incubated</p>
              <p className="text-2xl font-bold text-gray-900">8</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center p-6">
            <DollarSign className="h-8 w-8 text-yellow-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Funding</p>
              <p className="text-2xl font-bold text-gray-900">₹15.2L</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center p-6">
            <Users className="h-8 w-8 text-purple-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Entrepreneurs</p>
              <p className="text-2xl font-bold text-gray-900">25</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Startup Incubation</CardTitle>
          <CardDescription>Track and manage student startup initiatives</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Input placeholder="Search startups..." className="max-w-sm" />
            <div className="space-y-2">
              {startups.map((startup) => (
                <div key={startup.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div>
                      <p className="font-medium">{startup.name}</p>
                      <p className="text-sm text-gray-500">Founder: {startup.founder}</p>
                    </div>
                    <Badge variant="outline">{startup.stage}</Badge>
                    <Badge variant="secondary">{startup.funding}</Badge>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right text-sm">
                      <div>Mentor: {startup.mentor}</div>
                      <Badge variant={startup.status === 'Active' ? 'default' : 'secondary'}>
                        {startup.status}
                      </Badge>
                    </div>
                    <Button size="sm" variant="outline">Review</Button>
                    <Button size="sm">Support</Button>
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

export default StartupPanel;