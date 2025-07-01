import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../components/ui/table';
import {
  Users,
  UserPlus,
  Search,
  Download,
  Shield,
  Key,
  Clock,
  CheckCircle,
  XCircle,
  Settings
} from 'lucide-react';
import { GBU_SCHOOLS } from '../data/gbuMasterData';

const UserManagement = () => {
  const [selectedSchool, setSelectedSchool] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState('all');

  const users = [
    {
      id: 1,
      name: 'Dr. Amit Kumar Singh',
      email: 'amit.singh@gbu.ac.in',
      role: 'Faculty',
      school: 'SoICT',
      department: 'CSE',
      status: 'Active',
      lastLogin: '2024-12-27 09:30',
      joinDate: '2024-01-15'
    },
    {
      id: 2,
      name: 'Prof. Sunita Sharma',
      email: 'sunita.sharma@gbu.ac.in',
      role: 'Dean',
      school: 'SoE',
      department: 'Civil',
      status: 'Active',
      lastLogin: '2024-12-27 08:45',
      joinDate: '2023-07-20'
    },
    {
      id: 3,
      name: 'Mr. Rajesh Kumar',
      email: 'rajesh.kumar@gbu.ac.in',
      role: 'Admin',
      school: 'Central',
      department: 'Registrar Office',
      status: 'Inactive',
      lastLogin: '2024-12-25 17:30',
      joinDate: '2022-03-10'
    }
  ];

  const roles = ['Super Admin', 'Admin', 'Dean', 'HoD', 'Faculty', 'Staff', 'Viewer'];

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Active':
        return (
          <Badge className="bg-green-100 text-green-800">
            <CheckCircle className="w-3 h-3 mr-1" />
            {status}
          </Badge>
        );
      case 'Inactive':
        return (
          <Badge variant="secondary">
            <Clock className="w-3 h-3 mr-1" />
            {status}
          </Badge>
        );
      case 'Suspended':
        return (
          <Badge variant="destructive">
            <XCircle className="w-3 h-3 mr-1" />
            {status}
          </Badge>
        );
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getRoleBadge = (role) => {
    const colors = {
      'Super Admin': 'bg-purple-100 text-purple-800',
      'Admin': 'bg-blue-100 text-blue-800',
      'Dean': 'bg-indigo-100 text-indigo-800',
      'HoD': 'bg-teal-100 text-teal-800',
      'Faculty': 'bg-green-100 text-green-800',
      'Staff': 'bg-yellow-100 text-yellow-800',
      'Viewer': 'bg-gray-100 text-gray-800'
    };
    return <Badge className={colors[role] || 'bg-gray-100 text-gray-800'}>{role}</Badge>;
  };

  // Filtered users
  const filteredUsers = users.filter(user =>
    (selectedSchool === '' || user.school === selectedSchool) &&
    (roleFilter === 'all' || user.role.toLowerCase() === roleFilter) &&
    (user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">User Management</h2>
          <p className="text-gray-600">Manage system users, roles, and permissions</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export CSV
          </Button>
          <Button>
            <UserPlus className="w-4 h-4 mr-2" />
            Add User
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Users</p>
                <p className="text-2xl font-bold text-blue-600">248</p>
              </div>
              <Users className="w-8 h-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Users</p>
                <p className="text-2xl font-bold text-green-600">235</p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Admin Users</p>
                <p className="text-2xl font-bold text-purple-600">15</p>
              </div>
              <Shield className="w-8 h-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pending Approvals</p>
                <p className="text-2xl font-bold text-orange-600">8</p>
              </div>
              <Clock className="w-8 h-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="users" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="users">All Users</TabsTrigger>
          <TabsTrigger value="roles">Roles & Permissions</TabsTrigger>
          <TabsTrigger value="activity">Activity Logs</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="users" className="space-y-6">
          {/* Filters */}
          <Card>
            <CardContent className="p-4">
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <Search className="w-4 h-4 text-gray-400" />
                  <Input
                    placeholder="Search users..."
                    className="w-64"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <select
                  className="px-3 py-1 border border-gray-300 rounded-md text-sm"
                  value={selectedSchool}
                  onChange={(e) => setSelectedSchool(e.target.value)}
                >
                  <option value="">All Schools</option>
                  {GBU_SCHOOLS.map(school => (
                    <option key={school.id} value={school.id}>{school.code}</option>
                  ))}
                </select>
                <select
                  className="px-3 py-1 border border-gray-300 rounded-md text-sm"
                  value={roleFilter}
                  onChange={(e) => setRoleFilter(e.target.value)}
                >
                  <option value="all">All Roles</option>
                  {roles.map(role => (
                    <option key={role} value={role.toLowerCase()}>{role}</option>
                  ))}
                </select>
              </div>
            </CardContent>
          </Card>

          {/* Users Table */}
          <Card>
            <CardHeader>
              <CardTitle>User Directory</CardTitle>
              <CardDescription>Manage all system users and their access levels</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>School/Dept</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Last Login</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredUsers.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell className="font-medium">{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{getRoleBadge(user.role)}</TableCell>
                      <TableCell>
                        <div>
                          <div className="font-medium">{user.school}</div>
                          <div className="text-sm text-gray-500">{user.department}</div>
                        </div>
                      </TableCell>
                      <TableCell>{getStatusBadge(user.status)}</TableCell>
                      <TableCell>{user.lastLogin}</TableCell>
                      <TableCell>
                        <div className="flex gap-1">
                          <Button size="sm" variant="outline">
                            <Settings className="w-3 h-3" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Key className="w-3 h-3" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="roles" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {roles.map((role) => (
              <Card key={role}>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    {role}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="text-sm text-gray-600">
                      Permissions: {role === 'Super Admin' ? 'All Modules' : 'Limited Access'}
                    </div>
                    <div className="text-sm text-gray-600">
                      Users: {Math.floor(Math.random() * 50) + 1}
                    </div>
                    <Button variant="outline" size="sm">
                      <Settings className="w-3 h-3 mr-1" />
                      Configure
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="activity" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>User login and system activity logs</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { user: 'Dr. Amit Singh', action: 'Logged in', time: '2 minutes ago', type: 'login' },
                  { user: 'Prof. Sunita Sharma', action: 'Updated course mapping', time: '15 minutes ago', type: 'update' },
                  { user: 'Mr. Rajesh Kumar', action: 'Approved leave request', time: '1 hour ago', type: 'approval' },
                  { user: 'Dr. Priya Verma', action: 'Failed login attempt', time: '2 hours ago', type: 'error' }
                ].map((log, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${
                        log.type === 'login' ? 'bg-green-500' :
                        log.type === 'update' ? 'bg-blue-500' :
                        log.type === 'approval' ? 'bg-purple-500' : 'bg-red-500'
                      }`} />
                      <p className="font-medium">{log.user}</p>
                      <p className="text-sm text-gray-600">{log.action}</p>
                    </div>
                    <span className="text-sm text-gray-500">{log.time}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>System Settings</CardTitle>
              <CardDescription>Configure user management settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-3">Password Policy</h4>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span className="text-sm">Minimum 8 characters</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span className="text-sm">Require special characters</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Password expiry (90 days)</span>
                    </label>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-3">Session Management</h4>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span className="text-sm">Auto-logout after 2 hours</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Multi-device login</span>
                    </label>
                  </div>
                </div>
              </div>
              <Button className="mt-4">Save Settings</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default UserManagement;