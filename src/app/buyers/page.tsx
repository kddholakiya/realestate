"use client"; // 👈 Ensure it's a Client Component
import React, { useState } from 'react';
import { Search, Star, StarHalf, ChevronUp, ChevronDown, Menu, DollarSign, ShoppingBag } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import buyersData from '@/data/PropertyHeader.json';

const BuyersPage = () => {
  const [sortOrder, setSortOrder] = useState('default');
  const [searchTerm, setSearchTerm] = useState('');

  // Ensure `buyersData.buyers` exists
  const buyers = buyersData?.buyers || [];

  // Sort the buyers based on the current sort order
  const sortedBuyers = [...buyers].sort((a, b) => {
    const parseBudget = (budget: number) => budget || 0;

    if (sortOrder === 'rating-high') return b.rating - a.rating;
    if (sortOrder === 'rating-low') return a.rating - b.rating;
    if (sortOrder === 'purchases-high') return b.totalPurchases - a.totalPurchases;
    if (sortOrder === 'purchases-low') return a.totalPurchases - b.totalPurchases;
    if (sortOrder === 'budget-high') return parseBudget(b.budget) - parseBudget(a.budget);
    if (sortOrder === 'budget-low') return parseBudget(a.budget) - parseBudget(b.budget);
    if (sortOrder === 'name-az') return a.name.localeCompare(b.name);
    if (sortOrder === 'name-za') return b.name.localeCompare(a.name);
    return a.id - b.id; // Default sort by ID
  });

  // Filter buyers based on search term
  const filteredBuyers = sortedBuyers.filter(buyer => 
    buyer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    buyer.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Render rating stars
  const renderRating = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="w-4 h-4 fill-yellow-400 text-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="w-4 h-4 fill-yellow-400 text-yellow-400" />);
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />);
    }

    return stars;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 space-y-4">
        <h1 className="text-3xl font-bold">Buyers Directory</h1>
        <p className="text-gray-500">Connect with our network of {buyers.length} potential buyers</p>

        {/* Search and Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input 
              placeholder="Search buyers..." 
              className="pl-10" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <span>Sort By</span>
                {sortOrder === 'default' ? (
                  <Menu className="h-4 w-4" />
                ) : sortOrder.includes('high') ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='bg-white overflow-y-auto'>
              <DropdownMenuItem onClick={() => setSortOrder('default')}>Default</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSortOrder('rating-high')}>Rating (High to Low)</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSortOrder('rating-low')}>Rating (Low to High)</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSortOrder('purchases-high')}>Purchases (High to Low)</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSortOrder('purchases-low')}>Purchases (Low to High)</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSortOrder('budget-high')}>Budget (High to Low)</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSortOrder('budget-low')}>Budget (Low to High)</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSortOrder('name-az')}>Name (A-Z)</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSortOrder('name-za')}>Name (Z-A)</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Buyers Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredBuyers.map(buyer => (
          <Card key={buyer.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <div className="p-4 flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <Avatar className="h-16 w-16 border-2 border-gray-100">
                    <AvatarImage src={buyer.image} alt={buyer.name} />
                    <AvatarFallback>{buyer.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-lg">{buyer.name}</h3>
                    <div className="flex items-center gap-1 mt-1">
                      {renderRating(buyer.rating)}
                      <span className="text-sm text-gray-500 ml-1">({buyer.rating.toFixed(1)})</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-sm text-gray-500">{buyer.email}</p>
                  <p className="text-sm text-gray-500">{buyer.phone}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge variant="secondary"><ShoppingBag className="h-3 w-3" /> {buyer.totalPurchases} Purchases</Badge>
                    <Badge variant="outline" className="bg-green-50"><DollarSign className="h-3 w-3" /> {buyer.budget}</Badge>
                  </div>
                </div>

                <Button className="w-full mt-2">Contact Buyer</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BuyersPage;
