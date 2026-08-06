'use client';

import { useState, type ReactNode } from 'react';
import Image from 'next/image';
import SiteHeader from '@/components/SiteHeader';

const leasingServices = [
  {
    title: 'Institutional Tenant Placement',
    text: 'Secure long-term, creditworthy occupiers across retail, office, industrial, and residential sectors.',
  },
  {
    title: 'Lease Structuring & Advisory',
    text: 'Create lease agreements that align with your capital strategy - from NNN to revenue-share models.',
  },
  {
    title: 'Asset Repositioning Through Leasing',
    text: 'Convert underutilized or vacant space into high-performing income assets.',
  },
  {
    title: 'Build-to-Lease Strategy',
    text: 'Secure pre-lease agreements for developments to enhance exit value or improve financing terms.',
  },
  {
    title: 'Cross-Border Leasing',
    text: 'Position African assets to attract international occupiers; position global assets for strategic tenants from emerging markets.',
  },
];

const audiences = [
  'Asset Owners & Developers',
  'Family Offices & Institutional Landlords',
  'REPE and Real Estate Funds',
  'Sovereign and Government-backed Entities',
  'Hospitality, Healthcare, and Logistics Operators',
];

const advantages = [
  {
    title: 'Global Leasing Network',
    text: 'Powered by broker relationships, tenant reps, and operator platforms across Africa, Europe, US, and the Middle East.',
  },
  {
    title: 'Strategic Lease Structuring',
    text: 'We understand how leases impact valuation, debt structures, and long-term exit strategies.',
  },
  {
    title: 'Capital Optimization',
    text: 'Leases serve as tools for refinancing, sale, or fund integration. We help you leverage that value smartly.',
  },
];

const propertyTypes = [
  'Office',
  'Multi-Family',
  'Hospitality',
  'Retail',
  'Farm Land',
  'Fuel Station',
  'Healthcare',
  'Warehouse',
  'Restaurant',
];

type InquiryType = 'Discuss Your Property' | 'List a Property' | 'Find a Property';

type PropertyTypeKey = 'office' | 'multifamily' | 'hospitality' | 'retail' | 'farmland' | 'fuelstation' | 'healthcare' | 'warehouse' | 'restaurant';
type Intent = 'list' | 'find' | '';
type DetailKind = 'text' | 'textarea' | 'select' | 'chips' | 'size' | 'currency' | 'budget_range' | 'upload' | 'location';
type DetailField = {
  section?: string;
  id: string;
  label: string;
  kind?: DetailKind;
  options?: string[];
  placeholder?: string;
  description?: string;
  min?: number;
  max?: number;
};

const propertyOptions: Array<{ value: PropertyTypeKey; label: string; icon: string }> = [
  { value: 'office', label: 'Office', icon: '🏢' },
  { value: 'multifamily', label: 'Multi-Family', icon: '🏘️' },
  { value: 'hospitality', label: 'Hospitality', icon: '🏨' },
  { value: 'retail', label: 'Retail', icon: '🛍️' },
  { value: 'farmland', label: 'Farm Land', icon: '🌾' },
  { value: 'fuelstation', label: 'Fuel Station', icon: '⛽' },
  { value: 'healthcare', label: 'Healthcare', icon: '🏥' },
  { value: 'warehouse', label: 'Warehouse', icon: '🏭' },
  { value: 'restaurant', label: 'Restaurant', icon: '🍽️' },
];

const selectOptions = {
  condition: ['Excellent', 'Good', 'Fair', 'Poor'],
  leaseType: ['Gross', 'NNN', 'Modified Gross', 'Full Service'],
  timeline: ['Immediately', 'Within 3 months', 'Within 6 months', 'Flexible'],
};

const detailFields: Record<PropertyTypeKey, { list: DetailField[]; find: DetailField[] }> = {
  office: {
    list: [
      { section: 'Basic Property Information', id: 'prop_name', label: 'Property Name', placeholder: 'e.g. 123 Tower' },
      { id: 'address', label: 'Full Address', kind: 'location', placeholder: 'Street, City, State' },
      { id: 'total_rsf', label: 'Total Size (RSF)', kind: 'size', description: 'Rentable square footage' },
      { id: 'total_usf', label: 'Total Size (USF)', kind: 'size', description: 'Usable square footage' },
      { id: 'lot_size', label: 'Lot Size', kind: 'size' },
      { id: 'year_built', label: 'Year Built / Renovated', placeholder: 'e.g. 2005 / 2018' },
      { id: 'condition', label: 'Condition', kind: 'select', options: selectOptions.condition },
      { id: 'bldg_class', label: 'Building Class', kind: 'select', options: ['Class A', 'Class B', 'Class C'] },
      { id: 'zoning', label: 'Zoning', placeholder: 'e.g. Commercial Office' },
      { section: 'Location & Accessibility', id: 'proximity', label: 'Proximity to Major Areas', kind: 'location', placeholder: 'e.g. nearby landmarks' },
      { id: 'transit', label: 'Transit Access', kind: 'chips', options: ['Subway', 'Bus', 'Train', 'Ferry', 'None'] },
      { id: 'airport_dist', label: 'Airport Distance', placeholder: 'miles/km' },
      { id: 'parking_spaces', label: 'Parking Spaces', placeholder: 'number of spaces' },
      { id: 'parking_type', label: 'Parking Type', kind: 'chips', options: ['Surface', 'Structured', 'Underground', 'Street'] },
      { id: 'parking_cost', label: 'Parking Cost', kind: 'currency', placeholder: 'per month or included' },
      { section: 'Space Details', id: 'floor_size', label: 'Typical Floor Size', kind: 'size' },
      { id: 'num_floors', label: 'Number of Floors', placeholder: 'e.g. 12' },
      { id: 'layout', label: 'Layout', kind: 'select', options: ['Open Plan', 'Cellular', 'Combination', 'Flexible'] },
      { id: 'ceiling_h', label: 'Ceiling Height', kind: 'size' },
      { id: 'elevators', label: 'Number of Elevators', placeholder: 'e.g. 4' },
      { id: 'elev_types', label: 'Elevator Types', kind: 'chips', options: ['Passenger', 'Freight', 'Service'] },
      { section: 'Lease Terms', id: 'asking_rent', label: 'Asking Rent', kind: 'currency', placeholder: 'per sq ft / yr' },
      { id: 'lease_type', label: 'Lease Type', kind: 'select', options: selectOptions.leaseType },
      { id: 'lease_term', label: 'Lease Term', placeholder: 'e.g. 3-10 years' },
      { id: 'available_date', label: 'Available Date', placeholder: 'MM/YYYY' },
      { section: 'Contacts & Marketing', id: 'broker_name', label: 'Listing Broker Name', placeholder: 'Full name' },
      { id: 'broker_email', label: 'Broker Email', placeholder: 'broker@firm.com' },
      { id: 'listing_type', label: 'Listing Type', kind: 'select', options: ['Exclusive', 'Open', 'Co-Exclusive'] },
      { id: 'photos', label: 'Photos / Floor Plans', kind: 'upload' },
      { section: 'Zoho Classification', id: 'z_rating', label: 'Asset Submission Category', kind: 'select', options: ['Landlord / Sell', 'Tenant / Buy'] },
      { id: 'z_asset_type', label: 'Asset Type', kind: 'select', options: ['Office Lease', 'Office', 'Not Clear Yet'] },
      { id: 'z_office_type', label: 'Office Type', kind: 'select', options: ['Single Tenant Office Building', 'Multi Tenant Office Building', 'Co-Working space', 'Flexible Office', 'Medical Office Space', 'Mixed Use Property', 'Others (please specify)'] },
      { id: 'z_num_floors', label: 'Number of Floors', kind: 'select', options: ['1 Floor', '2-4 Floors', '5-10 Floors', '10+ Floors'] },
      { id: 'z_floor_layout', label: 'Floor Layout', kind: 'select', options: ['Open floor plan', 'Partitioned sections', 'Multiple floors'] },
      { id: 'z_bldg_condition', label: 'Building Condition', kind: 'select', options: ['Newly constructed', 'Recently renovated', 'Older building that needs renovations', 'Historic building (for adaptive reuse)'] },
      { id: 'z_bldg_height', label: 'Building Height & Structure', kind: 'select', options: ['Low rise (1-3 floors)', 'Mid rise (4-7 floors)', 'High rise (8+ floors)'] },
      { id: 'z_lease_structure', label: 'Lease Structure', kind: 'select', options: ['Triple net lease (NNN)', 'Gross lease', 'Modified gross lease', 'Short term lease', 'Long term leases (5+ years)', 'Flexible leases (for co-working or shared spaces)'] },
      { id: 'z_facilities', label: 'Building Facilities', kind: 'chips', options: ['Elevators', 'High speed internet and telecom connectivity', 'HVAC systems', 'Building security', 'Onsite management office', 'Conference/meeting rooms', 'Common areas', 'Fitness center', 'Break rooms / kitchenettes', 'Outdoor space', 'Fire protection and safety systems', 'Storage/Backroom', 'Loading docks', 'Convenience store', 'Car Wash', 'Food and beverage outlet', 'Auto Repair Services', 'ATMs'] },
      { id: 'z_accessibility', label: 'Accessibility', kind: 'chips', options: ['Major highways & Transportation hubs', 'High traffic / Business areas', 'Residential neighborhoods', 'Schools or universities', 'Access to public transportation', 'Proximity to amenities', 'Green space or outdoor seating areas', 'Parking availability'] },
      { id: 'z_sustainability', label: 'Sustainability Features', kind: 'chips', options: ['LEED Certification', 'Energy efficient systems', 'Electric vehicle charging stations', 'Solar panels', 'Water saving features', 'Waste reduction and recycling systems', 'Green roof or outdoor garden space'] },
      { id: 'z_mgmt_model', label: 'Management Model', kind: 'select', options: ['In house management', 'Third party management company', 'Self managed'] },
      { id: 'z_min_lease', label: 'Minimum Lease Term', kind: 'select', options: ['1 year', '3 years', '5+ years'] },
      { id: 'z_rent_freq', label: 'Rent Frequency', kind: 'select', options: ['Monthly', 'Yearly'] },
      { id: 'z_avail_from', label: 'Available From (Date)', placeholder: 'YYYY-MM-DD' },
      { id: 'z_deposit', label: 'Deposit Required', kind: 'currency', placeholder: 'Amount' },
      { id: 'z_description', label: 'Reason for Lease', kind: 'textarea', placeholder: 'Describe the reason for leasing...' },
    ],
    find: [
      { section: 'Office Search Criteria', id: 'pref_location', label: 'Preferred Location(s)', kind: 'location', placeholder: 'City, neighborhood, or ZIP' },
      { id: 'office_type', label: 'Desired Office Type', kind: 'select', options: ['Class A', 'Class B', 'Coworking', 'Any'] },
      { id: 'desired_size', label: 'Desired Size', kind: 'size' },
      { id: 'budget', label: 'Budget Range', kind: 'budget_range', min: 0, max: 5000000 },
      { id: 'timeline', label: 'Timeline', placeholder: 'e.g. Within 3 months' },
      { id: 'requirements', label: 'Specific Requirements', kind: 'textarea', placeholder: 'Describe any special needs...' },
      { section: 'Zoho Classification', id: 'z_rating', label: 'Asset Submission Category', kind: 'select', options: ['Landlord / Sell', 'Tenant / Buy'] },
      { id: 'z_asset_type', label: 'Asset Type', kind: 'select', options: ['Office Lease', 'Office', 'Not Clear Yet'] },
      { id: 'z_office_type', label: 'Office Type', kind: 'select', options: ['Single Tenant Office Building', 'Multi Tenant Office Building', 'Co-Working space', 'Flexible Office', 'Medical Office Space', 'Mixed Use Property', 'Others (please specify)'] },
      { id: 'z_lease_structure', label: 'Lease Structure', kind: 'select', options: ['Triple net lease (NNN)', 'Gross lease', 'Modified gross lease', 'Short term lease', 'Long term leases (5+ years)', 'Flexible leases (for co-working or shared spaces)'] },
      { id: 'z_description', label: 'Reason for Lease', kind: 'textarea', placeholder: 'Why are you looking for this space?' },
    ],
  },
  multifamily: {
    list: [
      { section: 'Basic Property Information', id: 'prop_name', label: 'Property Name', placeholder: 'e.g. Oak Grove Apartments' },
      { id: 'address', label: 'Full Address', kind: 'location', placeholder: 'Street, City, State' },
      { id: 'num_units', label: 'Number of Units', placeholder: 'e.g. 48' },
      { id: 'unit_mix', label: 'Unit Mix', placeholder: 'e.g. 10 studios, 20 1BR, 18 2BR', description: 'Describe the unit mix' },
      { id: 'total_area', label: 'Total Building Area', kind: 'size' },
      { id: 'lot_size', label: 'Lot Size', kind: 'size' },
      { id: 'year_built', label: 'Year Built / Renovated', placeholder: 'e.g. 1998 / 2019' },
      { id: 'condition', label: 'Condition', kind: 'select', options: selectOptions.condition },
      { id: 'stories', label: 'Stories', placeholder: 'number of floors' },
      { section: 'Financial Feasibility', id: 'rent_studio', label: 'Avg Rent - Studio', kind: 'currency', placeholder: 'per month' },
      { id: 'rent_1br', label: 'Avg Rent - 1BR', kind: 'currency', placeholder: 'per month' },
      { id: 'rent_2br', label: 'Avg Rent - 2BR', kind: 'currency', placeholder: 'per month' },
      { id: 'rent_3br', label: 'Avg Rent - 3BR+', kind: 'currency', placeholder: 'per month' },
      { id: 'op_costs', label: 'Operational Costs (monthly)', kind: 'currency', placeholder: 'per month', description: 'Utilities, taxes, insurance, maintenance' },
      { section: 'Physical Condition & Features', id: 'inspection', label: 'Inspection Completed', kind: 'select', options: ['Yes', 'No', 'In Progress'] },
      { id: 'gen_condition', label: 'General Building Condition', kind: 'textarea', placeholder: 'Describe overall condition...' },
      { id: 'in_unit', label: 'In-Unit Amenities', kind: 'chips', options: ['W/D', 'Dishwasher', 'AC', 'Balcony', 'Storage', 'Parking'] },
      { id: 'utilities_by', label: 'Utilities Paid By', kind: 'select', options: ['Landlord', 'Tenant', 'Varies by unit'] },
      { section: 'Lease & Management', id: 'lease_type', label: 'Lease Type', kind: 'select', options: ['Annual', 'Month-to-Month', 'Short-term'] },
      { id: 'security_dep', label: 'Security Deposit', kind: 'currency', placeholder: 'deposit amount' },
      { id: 'mgmt_plan', label: 'Who Handles Maintenance', placeholder: 'Property manager / self-managed' },
      { section: 'Marketing', id: 'broker_info', label: 'Broker / Leasing Contact', placeholder: 'Name, phone, email' },
      { id: 'photos', label: 'Photos / Documents', kind: 'upload' },
      { section: 'Zoho Classification', id: 'z_rating', label: 'Asset Submission Category', kind: 'select', options: ['Landlord / Sell', 'Tenant / Buy'] },
      { id: 'z_asset_type', label: 'Asset Type', kind: 'select', options: ['Multi-family', 'Not Clear Yet'] },
      { id: 'z_dev_type', label: 'Development Type', kind: 'select', options: ['Luxury apartments', 'Market rate apartments', 'Affordable housing', 'Student housing', 'Senior living', 'Other'] },
      { id: 'z_bldg_condition', label: 'Building Condition', kind: 'select', options: ['Newly constructed', 'Recently renovated', 'Older building that needs renovations', 'Historic building (for adaptive reuse)'] },
      { id: 'z_bldg_height', label: 'Building Height & Structure', kind: 'select', options: ['Low rise (1-3 floors)', 'Mid rise (4-7 floors)', 'High rise (8+ floors)'] },
      { id: 'z_zoning_approval', label: 'Building Zoning Approval', kind: 'select', options: ['Zoned for multi-family / residential', 'Requires re-zoning', 'Others'] },
      { id: 'z_pref_zoning', label: 'Preferred Zoning', kind: 'select', options: ['Residential', 'Mixed use (residential and commercial)', 'Urban renewal or redevelopment zones', 'Other'] },
      { id: 'z_infra', label: 'Building Infrastructure & Utilities', kind: 'chips', options: ['Water (municipal or well)', 'Sewer', 'Electricity', 'Gas', 'High speed internet/telecom', 'Swimming pool', 'Fitness center', 'Community spaces', 'Parking', 'Childcare facilities', 'Green spaces or rooftop gardens'] },
      { id: 'z_mgmt_model', label: 'Management Model', kind: 'select', options: ['In house management', 'Third party management company', 'Self managed'] },
      { id: 'z_lease_structure', label: 'Lease Structure', kind: 'select', options: ['Triple net lease (NNN)', 'Gross lease', 'Modified gross lease', 'Short term lease', 'Long term leases (5+ years)', 'Flexible leases (for co-working or shared spaces)'] },
      { id: 'z_min_lease', label: 'Minimum Lease Term', kind: 'select', options: ['1 year', '3 years', '5+ years'] },
      { id: 'z_rent_freq', label: 'Rent Frequency', kind: 'select', options: ['Monthly', 'Yearly'] },
      { id: 'z_avail_from', label: 'Available From (Date)', placeholder: 'YYYY-MM-DD' },
      { id: 'z_deposit', label: 'Deposit Required', kind: 'currency', placeholder: 'Amount' },
      { id: 'z_description', label: 'Reason for Lease', kind: 'textarea', placeholder: 'Describe the reason for leasing...' },
    ],
    find: [
      { section: 'Multi-Family Search', id: 'pref_location', label: 'Preferred Location(s)', kind: 'location', placeholder: 'City, neighborhood, ZIP' },
      { id: 'unit_pref', label: 'Unit Type Preference', kind: 'chips', options: ['Studio', '1BR', '2BR', '3BR+'] },
      { id: 'desired_size', label: 'Desired Size', kind: 'size' },
      { id: 'budget', label: 'Budget Range', kind: 'budget_range', min: 0, max: 10000 },
      { id: 'timeline', label: 'Timeline', placeholder: 'e.g. ASAP' },
      { id: 'requirements', label: 'Specific Requirements', kind: 'textarea', placeholder: 'Describe any special needs...' },
      { section: 'Zoho Classification', id: 'z_rating', label: 'Asset Submission Category', kind: 'select', options: ['Landlord / Sell', 'Tenant / Buy'] },
      { id: 'z_asset_type', label: 'Asset Type', kind: 'select', options: ['Multi-family', 'Not Clear Yet'] },
      { id: 'z_dev_type', label: 'Development Type', kind: 'select', options: ['Luxury apartments', 'Market rate apartments', 'Affordable housing', 'Student housing', 'Senior living', 'Other'] },
      { id: 'z_description', label: 'Reason for Lease', kind: 'textarea', placeholder: 'Why are you looking for this space?' },
    ],
  },
  hospitality: {
    list: [
      { section: 'Hotel Information', id: 'hotel_name', label: 'Hotel Name', placeholder: 'e.g. The Grand Hotel' },
      { id: 'address', label: 'Full Address', kind: 'location', placeholder: 'Street, City' },
      { id: 'land_area', label: 'Land Area', kind: 'size' },
      { id: 'built_up', label: 'Built-Up Area', kind: 'size' },
      { id: 'floors', label: 'Number of Floors', placeholder: 'e.g. 8' },
      { id: 'year_built', label: 'Year Built', placeholder: 'YYYY' },
      { section: 'Accommodation Capacity', id: 'total_rooms', label: 'Total Rooms', placeholder: 'e.g. 120' },
      { id: 'room_types', label: 'Room Types', kind: 'chips', options: ['Standard', 'Deluxe', 'Suite', 'Presidential', 'Other'] },
      { id: 'avg_room_size', label: 'Average Room Size', kind: 'size' },
      { section: 'Facilities & Services', id: 'facilities', label: 'On-Site Facilities', kind: 'chips', options: ['Restaurant', 'Pool', 'Gym', 'Spa', 'Conference Rooms', 'Parking', 'Bar', 'Business Centre'] },
      { id: 'num_rest', label: 'Number of Restaurants', placeholder: 'e.g. 2' },
      { id: 'conf_rooms', label: 'Conference Rooms', placeholder: 'e.g. 3' },
      { id: 'parking_cap', label: 'Parking Capacity', placeholder: 'number of spaces' },
      { section: 'Operational Status', id: 'curr_status', label: 'Current Status', kind: 'select', options: ['Operational', 'Under Renovation', 'Closed', 'Pre-Opening'] },
      { id: 'branded', label: 'Branded / Franchised', kind: 'select', options: ['Yes', 'No'] },
      { id: 'brand_name', label: 'Brand Name', placeholder: 'e.g. Marriott' },
      { section: 'Lease Details', id: 'lease_type', label: 'Lease Type', kind: 'select', options: ['Full Lease', 'Management Agreement', 'Revenue Share', 'Other'] },
      { id: 'monthly_amt', label: 'Monthly Lease Amount', kind: 'currency', placeholder: 'monthly amount' },
      { id: 'min_term', label: 'Minimum Term', placeholder: 'e.g. 5 years' },
      { id: 'security_dep', label: 'Security Deposit', kind: 'currency', placeholder: 'deposit amount' },
      { id: 'available_from', label: 'Available From', placeholder: 'MM/YYYY' },
      { section: 'Contact Information', id: 'contact_name', label: 'Full Name', placeholder: 'Your name' },
      { id: 'contact_role', label: 'Role', placeholder: 'e.g. Owner, Agent' },
      { id: 'contact_phone', label: 'Phone', placeholder: 'Phone number' },
      { id: 'photos', label: 'Photos / Floor Plans', kind: 'upload' },
      { section: 'Zoho Classification', id: 'z_rating', label: 'Asset Submission Category', kind: 'select', options: ['Landlord / Sell', 'Tenant / Buy'] },
      { id: 'z_asset_type', label: 'Asset Type', kind: 'select', options: ['Hospitality', 'Hospitality Purchase', 'Not Clear Yet'] },
      { id: 'z_hotel_type', label: 'Hotel Type', kind: 'select', options: ['Full service hotel', 'Select service hotel', 'Extended stay hotel', 'Resort/All inclusive', 'Boutique hotel', 'Airport hotel', 'Motel/Inn', 'Other'] },
      { id: 'z_hotel_style', label: 'Hotel Building Style', kind: 'select', options: ['Modern', 'Traditional', 'Luxury', 'Boutique/Art deco', 'Resort style', 'Others'] },
      { id: 'z_brand_affil', label: 'Brand Affiliation', kind: 'select', options: ['Branded', 'Independent'] },
      { id: 'z_hotel_amenities', label: 'Hotel Amenities', kind: 'chips', options: ['Full service restaurant(s)', 'Bar / Lounge area', 'Meeting / Conference rooms', 'Fitness center', 'Spa/wellness center', 'Swimming pool', 'Room service', 'Business center', 'Valet / Parking services', 'Laundry services', 'Event space', 'Concierge services', 'Outdoor recreational space'] },
      { id: 'z_hotel_prox', label: 'Hotel Proximities', kind: 'chips', options: ['Urban city center', 'Business district', 'Convention centers', 'Airports / Transport hubs', 'Beachfront / Waterfront location', 'Tourist attractions', 'Resort destinations', 'Restaurants and cafes', 'Shopping centers', 'Entertainment venues', 'Health facilities', 'Public transportation'] },
      { id: 'z_bldg_condition', label: 'Building Condition', kind: 'select', options: ['Newly constructed', 'Recently renovated', 'Older building that needs renovations', 'Historic building (for adaptive reuse)'] },
      { id: 'z_bldg_height', label: 'Building Height & Structure', kind: 'select', options: ['Low rise (1-3 floors)', 'Mid rise (4-7 floors)', 'High rise (8+ floors)'] },
      { id: 'z_mgmt_model', label: 'Management Model', kind: 'select', options: ['In house management', 'Third party management company', 'Self managed'] },
      { id: 'z_min_lease', label: 'Minimum Lease Term', kind: 'select', options: ['1 year', '3 years', '5+ years'] },
      { id: 'z_avail_from', label: 'Available From (Date)', placeholder: 'YYYY-MM-DD' },
      { id: 'z_deposit', label: 'Deposit Required', kind: 'currency', placeholder: 'Amount' },
      { id: 'z_description', label: 'Reason for Lease', kind: 'textarea', placeholder: 'Describe the reason for leasing...' },
    ],
    find: [
      { section: 'Hospitality Search', id: 'pref_location', label: 'Preferred Location(s)', kind: 'location', placeholder: 'City, region' },
      { id: 'star_rating', label: 'Star Rating Preference', kind: 'chips', options: ['1 Star', '2 Star', '3 Star', '4 Star', '5 Star'] },
      { id: 'prop_type', label: 'Property Type', kind: 'chips', options: ['Hotel', 'Motel', 'Resort', 'Boutique', 'Hostel'] },
      { id: 'desired_size', label: 'Desired Size / Rooms', placeholder: 'e.g. 50-150 rooms' },
      { id: 'amenities', label: 'Must-Have Amenities', kind: 'chips', options: ['Pool', 'Restaurant', 'Gym', 'Conference Rooms', 'Spa', 'Bar'] },
      { id: 'budget', label: 'Budget Range', kind: 'budget_range', min: 0, max: 2000000 },
      { id: 'timeline', label: 'Timeline', placeholder: 'e.g. Q2 2025' },
      { id: 'requirements', label: 'Special Requirements', kind: 'textarea', placeholder: 'Describe any special needs...' },
      { section: 'Zoho Classification', id: 'z_rating', label: 'Asset Submission Category', kind: 'select', options: ['Landlord / Sell', 'Tenant / Buy'] },
      { id: 'z_asset_type', label: 'Asset Type', kind: 'select', options: ['Hospitality', 'Hospitality Purchase', 'Not Clear Yet'] },
      { id: 'z_hotel_type', label: 'Hotel Type', kind: 'select', options: ['Full service hotel', 'Select service hotel', 'Extended stay hotel', 'Resort/All inclusive', 'Boutique hotel', 'Airport hotel', 'Motel/Inn', 'Other'] },
      { id: 'z_description', label: 'Reason for Lease', kind: 'textarea', placeholder: 'Why are you looking for this space?' },
    ],
  },
  retail: {
    list: [
      { section: 'Store Information', id: 'store_name', label: 'Store Name', placeholder: 'e.g. The Corner Shop' },
      { id: 'address', label: 'Street Address', kind: 'location', placeholder: 'Street, City' },
      { id: 'floor', label: 'Floor', placeholder: 'e.g. Ground Floor' },
      { id: 'total_area', label: 'Total Store Area', kind: 'size' },
      { id: 'frontage', label: 'Frontage Width', kind: 'size' },
      { section: 'Location & Visibility', id: 'position', label: 'Position in Property', kind: 'select', options: ['Corner Unit', 'Inline', 'End-Cap', 'Freestanding', 'Mall Kiosk'] },
      { id: 'foot_traffic', label: 'Foot Traffic Level', kind: 'select', options: ['High', 'Medium', 'Low'] },
      { id: 'nearby_anchors', label: 'Nearby Anchor Tenants', placeholder: 'e.g. Target, Starbucks' },
      { id: 'visibility', label: 'Visibility from Street', kind: 'select', options: ['Excellent', 'Good', 'Fair', 'Poor'] },
      { id: 'parking', label: 'Parking Availability', kind: 'select', options: ['Dedicated', 'Shared', 'Street', 'None'] },
      { section: 'Property Details & Features', id: 'ceiling_h', label: 'Ceiling Height', kind: 'size' },
      { id: 'floor_type', label: 'Floor Type', kind: 'chips', options: ['Concrete', 'Tile', 'Hardwood', 'Carpet', 'Other'] },
      { id: 'floor_other', label: 'Other Floor Type', placeholder: 'Describe floor type' },
      { id: 'includes', label: 'Included Features', kind: 'chips', options: ['Loading Dock', 'Stockroom', 'Fitting Rooms', 'Display Windows', 'Office Space', 'Break Room'] },
      { section: 'Lease Terms', id: 'lease_type', label: 'Lease Type', kind: 'select', options: ['Gross', 'NNN', 'Percentage Rent', 'Modified Gross'] },
      { id: 'monthly_rent', label: 'Monthly Lease Amount', kind: 'currency', placeholder: 'monthly amount' },
      { id: 'min_term', label: 'Minimum Lease Term', placeholder: 'e.g. 2 years' },
      { id: 'security_dep', label: 'Security Deposit', kind: 'currency', placeholder: 'deposit amount' },
      { id: 'available_from', label: 'Available From', placeholder: 'MM/YYYY' },
      { section: 'Owner or Agent Details', id: 'contact_name', label: 'Full Name', placeholder: 'Your name' },
      { id: 'contact_email', label: 'Email', placeholder: 'you@example.com' },
      { id: 'photos', label: 'Photos / Layout Plan', kind: 'upload' },
      { section: 'Zoho Classification', id: 'z_rating', label: 'Asset Submission Category', kind: 'select', options: ['Landlord / Sell', 'Tenant / Buy'] },
      { id: 'z_asset_type', label: 'Asset Type', kind: 'select', options: ['Retail Lease', 'Retail', 'Not Clear Yet'] },
      { id: 'z_retail_type', label: 'Retail Type', kind: 'select', options: ['Clothing/Apparel', 'Grocery/Supermarket', 'Electronics/Technology', 'Restaurant/Cafe', 'Other(s)'] },
      { id: 'z_floor_layout', label: 'Floor Layout', kind: 'select', options: ['Open floor plan', 'Partitioned sections', 'Multiple floors'] },
      { id: 'z_bldg_condition', label: 'Building Condition', kind: 'select', options: ['Newly constructed', 'Recently renovated', 'Older building that needs renovations', 'Historic building (for adaptive reuse)'] },
      { id: 'z_zoning_retail', label: 'Zoning for Retail Use?', kind: 'select', options: ['Yes', 'No'] },
      { id: 'z_accessibility', label: 'Accessibility', kind: 'chips', options: ['Major highways & Transportation hubs', 'High traffic / Business areas', 'Residential neighborhoods', 'Schools or universities', 'Access to public transportation', 'Proximity to amenities', 'Green space or outdoor seating areas', 'Parking availability'] },
      { id: 'z_facilities', label: 'Building Facilities', kind: 'chips', options: ['Elevators', 'High speed internet and telecom connectivity', 'HVAC systems (centralized or individual)', 'Building security (access control, surveillance)', 'Onsite management office', 'Conference/meeting rooms', 'Common areas (lobby, lounge)', 'Fitness center', 'Break rooms / kitchenettes', 'Outdoor space or Rooftop amenities', 'Fire protection and safety systems', 'Storage/Backroom', 'Loading docks', 'Convenience store', 'Car Wash', 'Food and beverage outlet', 'Auto Repair Services', 'ATMs'] },
      { id: 'z_lease_structure', label: 'Lease Structure', kind: 'select', options: ['Triple net lease (NNN)', 'Gross lease', 'Modified gross lease', 'Short term lease', 'Long term leases (5+ years)', 'Flexible leases (for co-working or shared spaces)'] },
      { id: 'z_min_lease', label: 'Minimum Lease Term', kind: 'select', options: ['1 year', '3 years', '5+ years'] },
      { id: 'z_avail_from', label: 'Available From (Date)', placeholder: 'YYYY-MM-DD' },
      { id: 'z_deposit', label: 'Deposit Required', kind: 'currency', placeholder: 'Amount' },
      { id: 'z_description', label: 'Reason for Lease', kind: 'textarea', placeholder: 'Describe the reason for leasing...' },
    ],
    find: [
      { section: 'Retail Search', id: 'pref_location', label: 'Preferred Location(s)', kind: 'location', placeholder: 'City, neighborhood' },
      { id: 'space_type', label: 'Retail Space Type', kind: 'chips', options: ['Strip Mall', 'Shopping Centre', 'High Street', 'Standalone', 'Kiosk'] },
      { id: 'desired_size', label: 'Desired Size', kind: 'size' },
      { id: 'foot_traffic', label: 'Foot Traffic Preference', kind: 'select', options: ['High', 'Medium', 'Low', 'Any'] },
      { id: 'layout_pref', label: 'Layout Preference', kind: 'chips', options: ['Open', 'Partitioned', 'Multi-Level', 'Flexible'] },
      { id: 'signage', label: 'Signage Requirements', placeholder: 'e.g. External signage required' },
      { id: 'budget', label: 'Budget Range', kind: 'budget_range', min: 0, max: 500000, placeholder: 'monthly budget' },
      { id: 'timeline', label: 'Timeline', placeholder: 'e.g. 3 months' },
      { id: 'requirements', label: 'Specific Requirements', kind: 'textarea', placeholder: 'Describe any special needs...' },
      { section: 'Zoho Classification', id: 'z_rating', label: 'Asset Submission Category', kind: 'select', options: ['Landlord / Sell', 'Tenant / Buy'] },
      { id: 'z_asset_type', label: 'Asset Type', kind: 'select', options: ['Retail Lease', 'Retail', 'Not Clear Yet'] },
      { id: 'z_retail_type', label: 'Retail Type', kind: 'select', options: ['Clothing/Apparel', 'Grocery/Supermarket', 'Electronics/Technology', 'Restaurant/Cafe', 'Other(s)'] },
      { id: 'z_description', label: 'Reason for Lease', kind: 'textarea', placeholder: 'Why are you looking for this space?' },
    ],
  },
  farmland: {
    list: [
      { section: 'Basic Property & Ownership', id: 'reason', label: 'Reason for Leasing', kind: 'select', options: ['Temporary relocation', 'Expanding portfolio', 'Retirement', 'Other'] },
      { id: 'total_acreage', label: 'Total Acreage', kind: 'size' },
      { id: 'boundaries', label: 'Boundaries Marked', kind: 'select', options: ['Yes', 'No', 'Partial'] },
      { id: 'current_use', label: 'Current Land Use', kind: 'chips', options: ['Row Crops', 'Livestock', 'Orchards', 'Fallow', 'Mixed', 'Other'] },
      { id: 'address', label: 'Property Location', kind: 'location', placeholder: 'Region, county, state' },
      { id: 'zoning', label: 'Zoning', placeholder: 'e.g. Agricultural A-1' },
      { section: 'Lease Terms & Financials', id: 'lease_duration', label: 'Lease Duration', placeholder: 'e.g. 3 years' },
      { id: 'rent_structure', label: 'Rent Structure', kind: 'select', options: ['Cash Rent', 'Crop Share', 'Flex Rent', 'Other'] },
      { id: 'rent_amount', label: 'Rent Amount', kind: 'currency', placeholder: 'per acre/yr or total' },
      { id: 'utilities', label: 'Utilities Included', kind: 'chips', options: ['Water', 'Electricity', 'None'] },
      { section: 'Land & Soil Condition', id: 'soil_test', label: 'Soil Test Performed', kind: 'select', options: ['Yes', 'No'] },
      { id: 'soil_notes', label: 'Soil Type / Notes', kind: 'textarea', placeholder: 'Describe soil quality...' },
      { id: 'drainage', label: 'Drainage Quality', kind: 'select', options: ['Excellent', 'Good', 'Fair', 'Poor'] },
      { id: 'irrigation', label: 'Irrigation System', kind: 'select', options: ['Yes - drip', 'Yes - overhead', 'No', 'Partial'] },
      { section: 'Water Rights & Usage', id: 'water_sources', label: 'Water Sources', kind: 'chips', options: ['Well', 'River/Stream', 'Municipal', 'Rainwater', 'None'] },
      { id: 'water_rights', label: 'Water Rights Included', kind: 'select', options: ['Yes', 'No', 'Partial'] },
      { section: 'Legal & Regulatory', id: 'permitted_uses', label: 'Permitted Uses', kind: 'chips', options: ['Row Crops', 'Livestock', 'Organic', 'Hunting/Fishing', 'Recreational', 'Other'] },
      { id: 'sublease', label: 'Sublease Allowed', kind: 'select', options: ['Yes', 'No'] },
      { id: 'contact_name', label: 'Contact Name', placeholder: 'Your name' },
      { id: 'contact_email', label: 'Contact Email', placeholder: 'you@example.com' },
      { id: 'docs', label: 'Documents', kind: 'upload' },
      { section: 'Zoho Classification', id: 'z_rating', label: 'Asset Submission Category', kind: 'select', options: ['Landlord / Sell', 'Tenant / Buy'] },
      { id: 'z_asset_type', label: 'Asset Type', kind: 'select', options: ['Land', 'Not Clear Yet'] },
      { id: 'z_farm_type', label: 'Farm Type', kind: 'select', options: ['Crop production', 'Livestock', 'Mixed use (both crops and livestock)', 'Orchard/Vineyard', 'Other'] },
      { id: 'z_soil_type', label: 'Soil Type', kind: 'select', options: ['Fertile agricultural soil', 'Grazing pasture', 'Mixed Use'] },
      { id: 'z_topography', label: 'Land Topography', kind: 'select', options: ['Flat', 'Gently slopped', 'Hilly', 'Mixed'] },
      { id: 'z_water_src', label: 'Water Source(s)', kind: 'chips', options: ['Well', 'Municipal', 'River', 'Canal', 'Reservoir'] },
      { id: 'z_irrigation', label: 'Irrigation System?', kind: 'select', options: ['Yes', 'No'] },
      { id: 'z_land_restrictions', label: 'Land Use Restrictions?', kind: 'select', options: ['Yes', 'No'] },
      { id: 'z_env_compliance', label: 'Environmental & Safety Compliance', kind: 'chips', options: ['Environmental Impact Assessment (EIA)', 'Fuel storage and handling regulations compliance', 'Others'] },
      { id: 'z_lease_structure', label: 'Lease Structure', kind: 'select', options: ['Triple net lease (NNN)', 'Gross lease', 'Modified gross lease', 'Short term lease', 'Long term leases (5+ years)', 'Flexible leases (for co-working or shared spaces)'] },
      { id: 'z_min_lease', label: 'Minimum Lease Term', kind: 'select', options: ['1 year', '3 years', '5+ years'] },
      { id: 'z_rent_freq', label: 'Rent Frequency', kind: 'select', options: ['Monthly', 'Yearly'] },
      { id: 'z_avail_from', label: 'Available From (Date)', placeholder: 'YYYY-MM-DD' },
      { id: 'z_deposit', label: 'Deposit Required', kind: 'currency', placeholder: 'Amount' },
      { id: 'z_description', label: 'Reason for Lease', kind: 'textarea', placeholder: 'Describe the reason for leasing...' },
    ],
    find: [
      { section: 'Farm Land Search', id: 'pref_location', label: 'Preferred Location(s)', kind: 'location', placeholder: 'State, county, region' },
      { id: 'desired_acreage', label: 'Desired Acreage', kind: 'size' },
      { id: 'soil_type', label: 'Preferred Soil Type', placeholder: 'e.g. loam, sandy loam' },
      { id: 'drainage', label: 'Preferred Drainage', kind: 'select', options: ['Excellent', 'Good', 'Fair', 'Any'] },
      { id: 'water_source', label: 'Water Source Preference', kind: 'chips', options: ['Well', 'River', 'Municipal', 'Any'] },
      { id: 'irrigation', label: 'Irrigation Needed', kind: 'select', options: ['Yes', 'No', 'Either'] },
      { id: 'intended_use', label: 'Intended Use', kind: 'chips', options: ['Row Crops', 'Livestock', 'Organic', 'Mixed', 'Other'] },
      { id: 'budget', label: 'Budget Range', kind: 'budget_range', min: 0, max: 500000, placeholder: 'annual budget' },
      { id: 'timeline', label: 'Timeline', placeholder: 'e.g. Spring planting season' },
      { id: 'requirements', label: 'Additional Requirements', kind: 'textarea', placeholder: 'Describe any special needs...' },
      { section: 'Zoho Classification', id: 'z_rating', label: 'Asset Submission Category', kind: 'select', options: ['Landlord / Sell', 'Tenant / Buy'] },
      { id: 'z_asset_type', label: 'Asset Type', kind: 'select', options: ['Land', 'Not Clear Yet'] },
      { id: 'z_farm_type', label: 'Farm Type', kind: 'select', options: ['Crop production', 'Livestock', 'Mixed use (both crops and livestock)', 'Orchard/Vineyard', 'Other'] },
      { id: 'z_description', label: 'Reason for Lease', kind: 'textarea', placeholder: 'Why are you looking for this land?' },
    ],
  },
  fuelstation: {
    list: [
      { section: 'Basic Property Information', id: 'station_name', label: 'Station Name', placeholder: 'e.g. Sunrise Fuels' },
      { id: 'address', label: 'Full Address', kind: 'location', placeholder: 'Street, City' },
      { id: 'land_size', label: 'Land Size', kind: 'size' },
      { id: 'building_size', label: 'Building Size', kind: 'size' },
      { section: 'Fueling Facilities', id: 'num_pumps', label: 'Number of Pumps', placeholder: 'e.g. 12' },
      { id: 'fuel_types', label: 'Fuel Types', kind: 'chips', options: ['Regular', 'Premium', 'Diesel', 'CNG', 'E85', 'EV Charging'] },
      { id: 'store_features', label: 'Store Features', kind: 'chips', options: ['Convenience Store', 'Car Wash', 'ATM', 'Food Service', 'Restrooms', 'Auto Repair'] },
      { section: 'Lease Details', id: 'lease_type', label: 'Lease Type', kind: 'select', options: ['Net Lease', 'Gross Lease', 'Ground Lease', 'Revenue Share', 'Other'] },
      { id: 'monthly_rent', label: 'Monthly Rent', kind: 'currency', placeholder: 'monthly amount' },
      { id: 'available_from', label: 'Available From', placeholder: 'MM/YYYY' },
      { id: 'docs', label: 'Compliance Documents', kind: 'upload' },
    ],
    find: [
      { section: 'Fuel Station Search', id: 'pref_location', label: 'Preferred Location(s)', kind: 'location', placeholder: 'City, region' },
      { id: 'proximity', label: 'Proximity to Key Areas', placeholder: 'e.g. highway, suburbs' },
      { id: 'station_type', label: 'Station Type', kind: 'chips', options: ['Branded', 'Unbranded', 'Multi-Brand', 'Any'] },
      { id: 'fuel_types', label: 'Required Fuel Types', kind: 'chips', options: ['Gasoline', 'Diesel', 'CNG', 'EV Charging', 'Any'] },
      { id: 'facilities', label: 'Required Facilities', kind: 'chips', options: ['Convenience Store', 'Car Wash', 'Restrooms', 'Food & Beverage', 'ATM', 'Auto Repair'] },
      { id: 'land_area', label: 'Desired Land Area', kind: 'size' },
      { id: 'budget', label: 'Budget Range', kind: 'currency', placeholder: 'budget amount' },
      { id: 'requirements', label: 'Special Features / Notes', kind: 'textarea', placeholder: 'Describe any special needs...' },
    ],
  },
  healthcare: {
    list: [
      { section: 'Property Information', id: 'prop_name', label: 'Property Name', placeholder: 'e.g. Westside Medical Center' },
      { id: 'address', label: 'Full Address', kind: 'location', placeholder: 'Street, City, State, ZIP' },
      { id: 'prop_type', label: 'Property Type', kind: 'select', options: ['Hospital', 'Clinic', 'Medical Office', 'Assisted Living', 'Dental', 'Rehab Center', 'Other'] },
      { id: 'year_built', label: 'Year Built', placeholder: 'YYYY' },
      { id: 'sqft', label: 'Square Footage', kind: 'size' },
      { id: 'lot_size', label: 'Lot Size', kind: 'size' },
      { section: 'Facility Details', id: 'num_rooms', label: 'Number of Rooms / Units', placeholder: 'e.g. 40 exam rooms' },
      { id: 'current_use', label: 'Current Use', placeholder: 'e.g. Active outpatient clinic' },
      { id: 'condition', label: 'Condition', kind: 'select', options: ['Excellent', 'Good', 'Fair', 'Needs Renovation'] },
      { id: 'zoning', label: 'Zoning', placeholder: 'e.g. Medical/Healthcare' },
      { id: 'asking_price', label: 'Asking Lease Price', kind: 'currency', placeholder: 'per month or per sq ft/yr' },
      { id: 'accessibility', label: 'Accessibility', kind: 'chips', options: ['ADA Compliant', 'Elevator', 'Ramp Access', 'Accessible Parking'] },
      { id: 'licensing', label: 'Licensing / Compliance', kind: 'textarea', placeholder: 'Describe licenses, certifications, or regulatory notes...' },
      { id: 'parking', label: 'Parking', placeholder: 'number of spaces' },
      { section: 'Contacts', id: 'contact_name', label: 'Contact Name', placeholder: 'Your name' },
      { id: 'contact_email', label: 'Email', placeholder: 'you@example.com' },
      { id: 'photos', label: 'Photos', kind: 'upload' },
      { section: 'Zoho Classification', id: 'z_rating', label: 'Asset Submission Category', kind: 'select', options: ['Landlord / Sell', 'Tenant / Buy'] },
      { id: 'z_asset_type', label: 'Asset Type', kind: 'select', options: ['Medical', 'Medical Purchase', 'Not Clear Yet'] },
      { id: 'z_bldg_condition', label: 'Building Condition', kind: 'select', options: ['Newly constructed', 'Recently renovated', 'Older building that needs renovations', 'Historic building (for adaptive reuse)'] },
      { id: 'z_cert_occupancy', label: 'Certificate of Occupancy?', kind: 'select', options: ['Yes', 'No'] },
      { id: 'z_facilities', label: 'Building Facilities', kind: 'chips', options: ['Elevators', 'High speed internet and telecom connectivity', 'HVAC systems (centralized or individual)', 'Building security (access control, surveillance)', 'Onsite management office', 'Conference/meeting rooms', 'Common areas (lobby, lounge)', 'Fitness center', 'Break rooms / kitchenettes', 'Outdoor space or Rooftop amenities', 'Fire protection and safety systems', 'Storage/Backroom', 'Loading docks', 'Convenience store', 'Car Wash', 'Food and beverage outlet', 'Auto Repair Services', 'ATMs'] },
      { id: 'z_accessibility', label: 'Accessibility', kind: 'chips', options: ['Major highways & Transportation hubs', 'High traffic / Business areas', 'Residential neighborhoods', 'Schools or universities', 'Access to public transportation', 'Proximity to amenities', 'Green space or outdoor seating areas', 'Parking availability'] },
      { id: 'z_sustainability', label: 'Sustainability Features', kind: 'chips', options: ['LEED Certification', 'Energy efficient systems', 'Electric vehicle charging stations', 'Solar panels', 'Water saving features', 'Waste reduction and recycling systems', 'Green roof or outdoor garden space'] },
      { id: 'z_lease_structure', label: 'Lease Structure', kind: 'select', options: ['Triple net lease (NNN)', 'Gross lease', 'Modified gross lease', 'Short term lease', 'Long term leases (5+ years)', 'Flexible leases (for co-working or shared spaces)'] },
      { id: 'z_min_lease', label: 'Minimum Lease Term', kind: 'select', options: ['1 year', '3 years', '5+ years'] },
      { id: 'z_avail_from', label: 'Available From (Date)', placeholder: 'YYYY-MM-DD' },
      { id: 'z_deposit', label: 'Deposit Required', kind: 'currency', placeholder: 'Amount' },
      { id: 'z_description', label: 'Reason for Lease', kind: 'textarea', placeholder: 'Describe the reason for leasing...' },
    ],
    find: [
      { section: 'Healthcare Property Search', id: 'pref_location', label: 'Preferred Location(s)', kind: 'location', placeholder: 'City, state, ZIP' },
      { id: 'prop_type', label: 'Property Type', kind: 'chips', options: ['Hospital', 'Clinic', 'Medical Office', 'Assisted Living', 'Dental', 'Rehab Center'] },
      { id: 'desired_size', label: 'Desired Size', kind: 'size' },
      { id: 'budget', label: 'Budget Range', kind: 'budget_range', min: 0, max: 500000, placeholder: 'budget amount' },
      { id: 'timeline', label: 'Timeline', placeholder: 'e.g. Within 6 months' },
      { id: 'requirements', label: 'Special Requirements', kind: 'textarea', placeholder: 'Describe any special needs...' },
      { section: 'Zoho Classification', id: 'z_rating', label: 'Asset Submission Category', kind: 'select', options: ['Landlord / Sell', 'Tenant / Buy'] },
      { id: 'z_asset_type', label: 'Asset Type', kind: 'select', options: ['Medical', 'Medical Purchase', 'Not Clear Yet'] },
      { id: 'z_description', label: 'Reason for Lease', kind: 'textarea', placeholder: 'Why are you looking for this space?' },
    ],
  },
  warehouse: {
    list: [
      { section: 'Basic Property Information', id: 'address', label: 'Full Address', kind: 'location', placeholder: 'Street, City, State' },
      { id: 'size', label: 'Total Size', kind: 'size', description: 'Interior area' },
      { id: 'lot_size', label: 'Lot Size', kind: 'size' },
      { id: 'zoning', label: 'Zoning', placeholder: 'e.g. Industrial M-1' },
      { id: 'bldg_type', label: 'Building Type', kind: 'select', options: ['Single-Tenant', 'Multi-Tenant', 'Cross-Dock', 'Cold Storage', 'Flex', 'Other'] },
      { id: 'year_built', label: 'Year Built / Renovated', placeholder: 'YYYY / YYYY' },
      { section: 'Structural & Technical Details', id: 'ceiling_h', label: 'Ceiling Height', kind: 'size' },
      { id: 'floor_load', label: 'Floor Load Capacity', placeholder: 'lbs/sq ft', description: 'lbs per sq ft' },
      { id: 'sprinkler', label: 'Sprinkler System', kind: 'select', options: ['ESFR', 'Wet Pipe', 'Dry Pipe', 'None'] },
      { id: 'lighting', label: 'Lighting Type', kind: 'chips', options: ['LED', 'Fluorescent', 'Metal Halide', 'Natural', 'Other'] },
      { id: 'voltage', label: 'Electrical Voltage', placeholder: 'e.g. 480V' },
      { id: 'amps', label: 'Amps', placeholder: 'e.g. 2000A' },
      { section: 'Access & Loading', id: 'dock_high', label: 'Dock-High Doors', placeholder: 'number of doors' },
      { id: 'grade_level', label: 'Grade-Level Doors', placeholder: 'number of doors' },
      { id: 'truck_access', label: 'Truck Court Depth', kind: 'size' },
      { id: 'drive_in', label: 'Drive-In Doors', placeholder: 'number' },
      { section: 'Lease Structure', id: 'asking_rent', label: 'Asking Rent', kind: 'currency', placeholder: 'per sq ft/yr' },
      { id: 'lease_type', label: 'Lease Type', kind: 'select', options: ['NNN', 'Gross', 'Modified Gross'] },
      { id: 'lease_term', label: 'Lease Term', placeholder: 'e.g. 3-7 years' },
      { id: 'available_date', label: 'Available Date', placeholder: 'MM/YYYY' },
      { id: 'ti_allowance', label: 'TI Allowance', kind: 'currency', placeholder: 'per sq ft or total' },
      { section: 'Contacts', id: 'contact_name', label: 'Broker / Contact Name', placeholder: 'Full name' },
      { id: 'contact_email', label: 'Email', placeholder: 'broker@firm.com' },
      { id: 'photos', label: 'Photos / Floor Plans', kind: 'upload' },
      { section: 'Zoho Classification', id: 'z_rating', label: 'Asset Submission Category', kind: 'select', options: ['Landlord / Sell', 'Tenant / Buy'] },
      { id: 'z_asset_type', label: 'Asset Type', kind: 'select', options: ['Industrial Lease', 'Industrial', 'Not Clear Yet'] },
      { id: 'z_wh_type', label: 'Warehouse Type', kind: 'select', options: ['Distribution center', 'Manufacturing warehouse', 'Cold storage (refrigerated/frozen)', 'Bulk storage', 'E-commerce fulfillment center', 'Light industrial warehouse', 'Mixed use warehouse (with office space or retail)', 'Other'] },
      { id: 'z_bldg_condition', label: 'Building Condition', kind: 'select', options: ['Newly constructed', 'Recently renovated', 'Older building that needs renovations', 'Historic building (for adaptive reuse)'] },
      { id: 'z_bldg_height', label: 'Building Height & Structure', kind: 'select', options: ['Low rise (1-3 floors)', 'Mid rise (4-7 floors)', 'High rise (8+ floors)'] },
      { id: 'z_security', label: 'Security System', kind: 'chips', options: ['Cameras', 'Alarms'] },
      { id: 'z_lighting', label: 'Lighting System', kind: 'select', options: ['Fully Functional', 'Partial'] },
      { id: 'z_facilities', label: 'Building Facilities', kind: 'chips', options: ['Elevators', 'High speed internet and telecom connectivity', 'HVAC systems (centralized or individual)', 'Building security (access control, surveillance)', 'Onsite management office', 'Conference/meeting rooms', 'Common areas (lobby, lounge)', 'Fitness center', 'Break rooms / kitchenettes', 'Outdoor space or Rooftop amenities', 'Fire protection and safety systems', 'Storage/Backroom', 'Loading docks', 'Convenience store', 'Car Wash', 'Food and beverage outlet', 'Auto Repair Services', 'ATMs'] },
      { id: 'z_sustainability', label: 'Sustainability Features', kind: 'chips', options: ['LEED Certification', 'Energy efficient systems', 'Electric vehicle charging stations', 'Solar panels', 'Water saving features', 'Waste reduction and recycling systems', 'Green roof or outdoor garden space'] },
      { id: 'z_lease_structure', label: 'Lease Structure', kind: 'select', options: ['Triple net lease (NNN)', 'Gross lease', 'Modified gross lease', 'Short term lease', 'Long term leases (5+ years)', 'Flexible leases (for co-working or shared spaces)'] },
      { id: 'z_min_lease', label: 'Minimum Lease Term', kind: 'select', options: ['1 year', '3 years', '5+ years'] },
      { id: 'z_rent_freq', label: 'Rent Frequency', kind: 'select', options: ['Monthly', 'Yearly'] },
      { id: 'z_avail_from', label: 'Available From (Date)', placeholder: 'YYYY-MM-DD' },
      { id: 'z_deposit', label: 'Deposit Required', kind: 'currency', placeholder: 'Amount' },
      { id: 'z_description', label: 'Reason for Lease', kind: 'textarea', placeholder: 'Describe the reason for leasing...' },
    ],
    find: [
      { section: 'Warehouse Search', id: 'pref_location', label: 'Preferred Location(s)', kind: 'location', placeholder: 'City, region, ZIP' },
      { id: 'wh_type', label: 'Warehouse Type', kind: 'chips', options: ['Distribution', 'Cold Storage', 'Manufacturing', 'Flex', 'Cross-Dock', 'Any'] },
      { id: 'min_size', label: 'Minimum Size', kind: 'size' },
      { id: 'max_size', label: 'Maximum Size', kind: 'size' },
      { id: 'min_ceiling', label: 'Minimum Ceiling Height', kind: 'size' },
      { id: 'loading_docks', label: 'Loading Dock Requirements', kind: 'chips', options: ['Dock-High', 'Grade Level', 'Drive-In', 'Any'] },
      { id: 'utilities', label: 'Essential Utilities', kind: 'chips', options: ['3-Phase Power', 'Gas', 'Water', 'High-Voltage', 'Fiber'] },
      { id: 'budget', label: 'Budget Range', kind: 'budget_range', min: 0, max: 1000000, placeholder: 'budget amount' },
      { id: 'requirements', label: 'Other Requirements', kind: 'textarea', placeholder: 'Describe any special needs...' },
      { section: 'Zoho Classification', id: 'z_rating', label: 'Asset Submission Category', kind: 'select', options: ['Landlord / Sell', 'Tenant / Buy'] },
      { id: 'z_asset_type', label: 'Asset Type', kind: 'select', options: ['Industrial Lease', 'Industrial', 'Not Clear Yet'] },
      { id: 'z_wh_type', label: 'Warehouse Type', kind: 'select', options: ['Distribution center', 'Manufacturing warehouse', 'Cold storage (refrigerated/frozen)', 'Bulk storage', 'E-commerce fulfillment center', 'Light industrial warehouse', 'Mixed use warehouse (with office space or retail)', 'Other'] },
      { id: 'z_description', label: 'Reason for Lease', kind: 'textarea', placeholder: 'Why are you looking for this space?' },
    ],
  },
  restaurant: {
    list: [
      { section: 'Basic Property Information', id: 'rest_name', label: 'Restaurant Name', placeholder: 'e.g. The Urban Kitchen' },
      { id: 'address', label: 'Full Address', kind: 'location', placeholder: 'Street, City' },
      { id: 'floor_area', label: 'Floor Area', kind: 'size' },
      { id: 'floors_used', label: 'Floors Used', placeholder: 'e.g. Ground only' },
      { id: 'year_built', label: 'Year Built', placeholder: 'YYYY' },
      { section: 'Visibility & Location', id: 'loc_type', label: 'Location Type', kind: 'select', options: ['High Street', 'Shopping Centre', 'Standalone', 'Hotel', 'Food Court', 'Other'] },
      { id: 'foot_traffic', label: 'Foot Traffic', kind: 'select', options: ['Very High', 'High', 'Medium', 'Low'] },
      { id: 'parking', label: 'Parking Availability', kind: 'select', options: ['Dedicated', 'Shared', 'Street', 'None'] },
      { id: 'nearby_anchors', label: 'Nearby Anchor Venues', placeholder: 'e.g. cinema, hotel, park' },
      { section: 'Restaurant Setup & Features', id: 'rest_type', label: 'Restaurant Type', kind: 'select', options: ['Full Service', 'Quick Service', 'Cafe', 'Bar & Grill', 'Fine Dining', 'Bakery', 'Ghost Kitchen', 'Other'] },
      { id: 'indoor_cap', label: 'Indoor Seating Capacity', placeholder: 'covers' },
      { id: 'outdoor_seat', label: 'Outdoor Seating', kind: 'select', options: ['Yes', 'No'] },
      { id: 'outdoor_cap', label: 'Outdoor Seating Capacity', placeholder: 'covers' },
      { id: 'interior', label: 'Interior Includes', kind: 'chips', options: ['Bar', 'Private Dining Room', 'Waiting Area', 'Takeout Counter', 'POS System', 'Sound System', 'AV Equipment'] },
      { section: 'Kitchen & Equipment', id: 'kitchen_type', label: 'Kitchen Type', kind: 'select', options: ['Full Commercial', 'Prep Only', 'Ghost Kitchen', 'None'] },
      { id: 'kitchen_feat', label: 'Kitchen Features', kind: 'chips', options: ['Hood & Ventilation', 'Walk-in Cooler', 'Walk-in Freezer', 'Commercial Dishwasher', 'Gas Lines', 'Grease Trap', 'Fire Suppression'] },
      { section: 'Lease Terms', id: 'lease_type', label: 'Lease Type', kind: 'select', options: ['Gross', 'NNN', 'Percentage Rent', 'Modified Gross'] },
      { id: 'monthly_rent', label: 'Monthly Rent', kind: 'currency', placeholder: 'monthly amount' },
      { id: 'min_term', label: 'Minimum Lease Term', placeholder: 'e.g. 3 years' },
      { id: 'security_dep', label: 'Security Deposit', kind: 'currency', placeholder: 'deposit amount' },
      { id: 'available_from', label: 'Available From', placeholder: 'MM/YYYY' },
      { section: 'Owner or Agent Details', id: 'contact_name', label: 'Full Name', placeholder: 'Your name' },
      { id: 'contact_email', label: 'Email', placeholder: 'you@example.com' },
      { id: 'photos', label: 'Photos / Floor Plan', kind: 'upload' },
      { section: 'Zoho Classification', id: 'z_rating', label: 'Asset Submission Category', kind: 'select', options: ['Landlord / Sell', 'Tenant / Buy'] },
      { id: 'z_asset_type', label: 'Asset Type', kind: 'select', options: ['Retail Lease', 'Retail', 'Not Clear Yet'] },
      { id: 'z_floor_layout', label: 'Floor Layout', kind: 'select', options: ['Open floor plan', 'Partitioned sections', 'Multiple floors'] },
      { id: 'z_bldg_condition', label: 'Building Condition', kind: 'select', options: ['Newly constructed', 'Recently renovated', 'Older building that needs renovations', 'Historic building (for adaptive reuse)'] },
      { id: 'z_accessibility', label: 'Accessibility', kind: 'chips', options: ['Major highways & Transportation hubs', 'High traffic / Business areas', 'Residential neighborhoods', 'Schools or universities', 'Access to public transportation', 'Proximity to amenities', 'Green space or outdoor seating areas', 'Parking availability'] },
      { id: 'z_facilities', label: 'Building Facilities', kind: 'chips', options: ['Elevators', 'High speed internet and telecom connectivity', 'HVAC systems (centralized or individual)', 'Building security (access control, surveillance)', 'Onsite management office', 'Conference/meeting rooms', 'Common areas (lobby, lounge)', 'Fitness center', 'Break rooms / kitchenettes', 'Outdoor space or Rooftop amenities', 'Fire protection and safety systems', 'Storage/Backroom', 'Loading docks', 'Convenience store', 'Car Wash', 'Food and beverage outlet', 'Auto Repair Services', 'ATMs'] },
      { id: 'z_lease_structure', label: 'Lease Structure', kind: 'select', options: ['Triple net lease (NNN)', 'Gross lease', 'Modified gross lease', 'Short term lease', 'Long term leases (5+ years)', 'Flexible leases (for co-working or shared spaces)'] },
      { id: 'z_min_lease', label: 'Minimum Lease Term', kind: 'select', options: ['1 year', '3 years', '5+ years'] },
      { id: 'z_avail_from', label: 'Available From (Date)', placeholder: 'YYYY-MM-DD' },
      { id: 'z_deposit', label: 'Deposit Required', kind: 'currency', placeholder: 'Amount' },
      { id: 'z_description', label: 'Reason for Lease', kind: 'textarea', placeholder: 'Describe the reason for leasing...' },
    ],
    find: [
      { section: 'Restaurant Space Search', id: 'pref_location', label: 'Preferred Location(s)', kind: 'location', placeholder: 'City, neighborhood' },
      { id: 'loc_pref', label: 'Location Preference', kind: 'chips', options: ['High Street', 'Shopping Centre', 'Standalone', 'Food Court'] },
      { id: 'rest_type', label: 'Restaurant Type', kind: 'chips', options: ['Full Service', 'Quick Service', 'Cafe', 'Bar', 'Fine Dining', 'Ghost Kitchen'] },
      { id: 'desired_size', label: 'Desired Size', kind: 'size' },
      { id: 'seating_cap', label: 'Seating Capacity', placeholder: 'minimum covers' },
      { id: 'kitchen_reqs', label: 'Kitchen Requirements', kind: 'chips', options: ['Full Commercial', 'Prep Only', 'None Required'] },
      { id: 'amenities', label: 'Must-Have Amenities', kind: 'chips', options: ['Outdoor Seating', 'Bar Area', 'Private Dining', 'Hood/Ventilation', 'Walk-in Cooler'] },
      { id: 'budget', label: 'Budget Range', kind: 'budget_range', min: 0, max: 200000, placeholder: 'budget amount' },
      { id: 'timeline', label: 'Timeline', placeholder: 'e.g. ASAP' },
      { id: 'requirements', label: 'Specific Requirements', kind: 'textarea', placeholder: 'Describe any special needs...' },
      { section: 'Zoho Classification', id: 'z_rating', label: 'Asset Submission Category', kind: 'select', options: ['Landlord / Sell', 'Tenant / Buy'] },
      { id: 'z_asset_type', label: 'Asset Type', kind: 'select', options: ['Retail Lease', 'Retail', 'Not Clear Yet'] },
      { id: 'z_description', label: 'Reason for Lease', kind: 'textarea', placeholder: 'Why are you looking for this space?' },
    ],
  },
};

type WizardForm = {
  fullName: string;
  company: string;
  countryCode: string;
  phone: string;
  email: string;
  intent: Intent;
  propertyType: PropertyTypeKey | '';
  details: Record<string, string>;
};

const getPropertyKey = (label: string): PropertyTypeKey | '' => propertyOptions.find((option) => option.label === label)?.value ?? '';

function Accordion({
  title,
  children,
  open,
  onToggle,
}: {
  title: string;
  children: ReactNode;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-t border-[#333333]/15 py-5 last:border-b">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-5 text-left text-xl font-semibold text-[#222222]"
      >
        <span>{title}</span>
        <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#333333]/20 text-2xl font-normal leading-none text-[#333333] transition-transform duration-300 ease-out ${open ? 'rotate-45' : ''}`} aria-hidden>
          +
        </span>
      </button>
      <div
        aria-hidden={!open}
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
      >
        <div className="min-h-0 overflow-hidden">
          <div className={`max-w-3xl pt-4 text-base leading-8 text-[#475569] transition-opacity duration-200 ease-out ${open ? 'opacity-100' : 'opacity-0'}`}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

function InquiryModal({
  open,
  inquiryType,
  propertyType,
  onClose,
}: {
  open: boolean;
  inquiryType: InquiryType;
  propertyType: string;
  onClose: () => void;
}) {
  const initialIntent: Intent = inquiryType === 'List a Property' ? 'list' : inquiryType === 'Find a Property' ? 'find' : '';
  const [step, setStep] = useState(1);
  const [saved, setSaved] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState<WizardForm>({
    fullName: '',
    company: '',
    countryCode: '+234',
    phone: '',
    email: '',
    intent: initialIntent,
    propertyType: getPropertyKey(propertyType),
    details: {},
  });

  if (!open) return null;

  const fields = form.propertyType
    ? detailFields[form.propertyType][form.intent === 'find' ? 'find' : 'list']
    : [];
  const selectedProperty = propertyOptions.find((option) => option.value === form.propertyType);
  const progress = `${step === 5 ? 100 : Math.max(0, Math.min(80, (step - 1) * 20))}%`;

  const updateForm = <K extends keyof WizardForm>(key: K, value: WizardForm[K]) => {
    setForm((current) => ({ ...current, [key]: value }));
    setSaved(false);
  };

  const updateDetail = (id: string, value: string) => {
    setForm((current) => ({ ...current, details: { ...current.details, [id]: value } }));
    setErrors((current) => ({ ...current, [`detail-${id}`]: '' }));
    setSaved(false);
  };

  const toggleChip = (id: string, option: string) => {
    const values = (form.details[id] || '').split(', ').filter(Boolean);
    const nextValues = values.includes(option) ? values.filter((value) => value !== option) : [...values, option];
    updateDetail(id, nextValues.join(', '));
  };

  const validateStep1 = () => {
    const nextErrors: Record<string, string> = {};
    if (form.fullName.trim().length < 2) nextErrors.fullName = 'Please enter your full name';
    if (!form.company.trim()) nextErrors.company = 'Please enter your company name';
    if (form.phone.trim().length < 5) nextErrors.phone = 'Please enter your phone number';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = 'Please enter a valid email';
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const validateStep4 = () => {
    const nextErrors: Record<string, string> = {};
    fields.filter((field) => !field.section && field.kind !== 'chips' && field.kind !== 'upload').slice(0, 3).forEach((field) => {
      if (!form.details[field.id]?.trim()) nextErrors[`detail-${field.id}`] = 'This field is required';
    });
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) setStep(2);
    else if (step === 2 && form.intent) setStep(3);
    else if (step === 2) setErrors({ intent: 'Please select an option' });
    else if (step === 3 && form.propertyType) setStep(4);
    else if (step === 3) setErrors({ propertyType: 'Please select a property type' });
    else if (step === 4 && validateStep4()) setStep(5);
  };

  const handleSave = () => {
    localStorage.setItem('avinell-lease-progress', JSON.stringify({ step, form }));
    setSaved(true);
  };

  const handleBack = () => {
    setErrors({});
    setStep((current) => Math.max(1, current - 1));
  };

  const handleSubmit = () => {
    localStorage.removeItem('avinell-lease-progress');
    setSubmitted(true);
  };

  const renderField = (field: DetailField) => {
    if (field.section) {
      return <div key={`${field.section}-${field.id}`} className="border-t border-black/10 pt-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#64748b]">{field.section}</div>;
    }

    const value = form.details[field.id] || '';
    const baseClass = 'mt-2 w-full rounded-[10px] border border-black/15 bg-white px-3.5 py-3 text-sm font-normal text-[#333333] outline-none transition-colors duration-200 focus:border-[#333333]';
    const error = errors[`detail-${field.id}`];

    return (
      <label key={field.id} className="block text-sm font-semibold text-[#333333]">
        {field.label}
        {field.description && <span className="ml-2 text-xs font-normal text-[#64748b]">{field.description}</span>}
        {field.kind === 'textarea' ? (
          <textarea value={value} onChange={(event) => updateDetail(field.id, event.target.value)} rows={3} className={`${baseClass} resize-y`} placeholder={field.placeholder} />
        ) : field.kind === 'select' ? (
          <select value={value} onChange={(event) => updateDetail(field.id, event.target.value)} className={baseClass}>
            <option value="">Select...</option>
            {field.options?.map((option) => <option key={option} value={option}>{option}</option>)}
          </select>
        ) : field.kind === 'chips' ? (
          <div className="mt-2 flex flex-wrap gap-2">
            {field.options?.map((option) => {
              const selected = value.split(', ').includes(option);
              return <button key={option} type="button" onClick={() => toggleChip(field.id, option)} className={`rounded-full border px-3 py-2 text-xs font-semibold transition-colors duration-200 ${selected ? 'border-[#333333] bg-[#333333] text-white' : 'border-black/15 text-[#64748b] hover:border-[#333333]/40'}`}>{option}</button>;
            })}
          </div>
        ) : field.kind === 'budget_range' ? (
          <div className="mt-2 rounded-[12px] border border-black/15 px-4 py-4">
            <div className="flex items-center justify-between gap-4 text-xs text-[#64748b]">
              <span>NGN 0</span>
              <strong className="text-sm text-[#333333]">{value ? `NGN ${Number(value).toLocaleString()}` : 'Choose a maximum budget'}</strong>
              <span>NGN {(field.max ?? 5000000).toLocaleString()}</span>
            </div>
            <input type="range" min={field.min ?? 0} max={field.max ?? 5000000} step={field.max && field.max < 100000 ? 100 : 10000} value={value || 0} onChange={(event) => updateDetail(field.id, event.target.value)} className="mt-4 w-full accent-[#333333]" />
          </div>
        ) : field.kind === 'upload' ? (
          <div className="relative mt-2 rounded-[12px] border border-dashed border-black/20 px-4 py-5 text-center text-sm font-normal text-[#64748b]">
            <input type="file" multiple onChange={(event) => updateDetail(field.id, Array.from(event.target.files ?? []).map((file) => file.name).join(', '))} className="absolute inset-0 cursor-pointer opacity-0" />
            <span>{value || 'Click or drag to upload'}</span>
          </div>
        ) : (
          <input value={value} onChange={(event) => updateDetail(field.id, event.target.value)} type={field.kind === 'currency' ? 'number' : 'text'} className={baseClass} placeholder={field.placeholder || (field.kind === 'size' ? 'Enter size' : field.kind === 'location' ? 'City, region or address' : '')} min={field.kind === 'currency' || field.kind === 'size' ? 0 : undefined} />
        )}
        {error && <span className="mt-1 block text-xs font-normal text-red-600">{error}</span>}
      </label>
    );
  };

  const closeModal = () => {
    setSaved(false);
    setSubmitted(false);
    onClose();
  };

  const reviewSections = [
    {
      title: 'Your Information',
      rows: [
        ['Full Name', form.fullName],
        ['Company', form.company],
        ['Phone', `${form.countryCode} ${form.phone}`],
        ['Email', form.email],
      ],
    },
    {
      title: 'Property Goal',
      rows: [
        ['Intent', form.intent === 'list' ? 'List a Property' : 'Find a Property'],
        ['Property Type', selectedProperty?.label || form.propertyType],
      ],
    },
  ];

  const detailReviewSections: Array<{ title: string; rows: Array<[string, string]> }> = [];
  let currentReviewSection: { title: string; rows: Array<[string, string]> } | null = null;
  fields.forEach((field) => {
    if (field.section) {
      currentReviewSection = { title: field.section, rows: [] };
      detailReviewSections.push(currentReviewSection);
      return;
    }
    const value = form.details[field.id]?.trim();
    if (value && currentReviewSection) currentReviewSection.rows.push([field.label, value]);
  });

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#222222]/65 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="leasing-inquiry-title">
      <div className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-[24px] bg-white shadow-[0_24px_80px_rgba(34,34,34,0.25)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="h-1.5 bg-[#f0f0f0]"><div className="h-full bg-[#333333] transition-[width] duration-300 ease-out" style={{ width: progress }} /></div>
        <div className="p-6 sm:p-8">
          <div className="flex items-start justify-between gap-6 border-b border-black/10 pb-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#64748b]">Step {step} of 5</p>
              <h2 id="leasing-inquiry-title" className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#222222] sm:text-4xl">
                {step === 1 ? 'Start Your Leasing Journey' : step === 2 ? "What's Your Objective?" : step === 3 ? 'What Type Of Property?' : step === 4 ? 'Property Details' : 'Review & Submit'}
              </h2>
              <p className="mt-2 text-sm leading-6 text-[#64748b]">
                {step === 1 ? "Tell us who you are - we'll match you with the right leasing or listing process." : step === 2 ? 'Are you listing a property for lease, or searching for one to occupy?' : step === 3 ? 'Choose the category that fits your property.' : step === 4 ? 'Fill in the details for your property.' : 'Confirm everything looks right before submitting your request.'}
              </p>
            </div>
            <button type="button" onClick={closeModal} aria-label="Close leasing enquiry" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-black/15 text-xl text-[#333333] transition-colors duration-200 hover:bg-[#333333] hover:text-white">&times;</button>
          </div>

          {step === 1 && (
            <div className="mt-7 space-y-5">
              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748b]">Full Name</label>
                <input value={form.fullName} onChange={(event) => updateForm('fullName', event.target.value)} className="mt-2 w-full border-b border-black/15 px-0 py-3 text-lg outline-none transition-colors duration-200 focus:border-[#333333]" placeholder="Your full name" />
                {errors.fullName && <p className="mt-1 text-xs text-red-600">{errors.fullName}</p>}
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748b]">Company Name</label>
                <input value={form.company} onChange={(event) => updateForm('company', event.target.value)} className="mt-2 w-full border-b border-black/15 px-0 py-3 text-lg outline-none transition-colors duration-200 focus:border-[#333333]" placeholder="Your company" />
                {errors.company && <p className="mt-1 text-xs text-red-600">{errors.company}</p>}
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748b]">Phone Number</label>
                <div className="mt-2 flex items-center gap-3 border-b border-black/15 py-2 focus-within:border-[#333333]">
                  <select value={form.countryCode} onChange={(event) => updateForm('countryCode', event.target.value)} className="bg-transparent text-sm outline-none"><option value="+234">NG +234</option><option value="+1">US +1</option><option value="+44">UK +44</option><option value="+27">ZA +27</option></select>
                  <span className="text-black/20">|</span>
                  <input value={form.phone} onChange={(event) => updateForm('phone', event.target.value)} className="min-w-0 flex-1 bg-transparent py-1 text-lg outline-none" placeholder="000 000 0000" />
                </div>
                {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748b]">Email Address</label>
                <input value={form.email} onChange={(event) => updateForm('email', event.target.value)} type="email" className="mt-2 w-full border-b border-black/15 px-0 py-3 text-lg outline-none transition-colors duration-200 focus:border-[#333333]" placeholder="you@company.com" />
                {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748b]">I want to...</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {(['list', 'find'] as const).map((intent) => (
                  <button key={intent} type="button" onClick={() => updateForm('intent', intent)} className={`rounded-full border px-5 py-3 text-sm font-semibold transition-colors duration-200 ${form.intent === intent ? 'border-[#333333] bg-[#333333] text-white' : 'border-black/15 text-[#475569] hover:border-[#333333]/40'}`}>
                    {intent === 'list' ? 'List a Property' : 'Find a Property'}
                  </button>
                ))}
              </div>
              {errors.intent && <p className="mt-3 text-xs text-red-600">{errors.intent}</p>}
            </div>
          )}

          {step === 3 && (
            <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {propertyOptions.map((option) => (
                <button key={option.value} type="button" onClick={() => updateForm('propertyType', option.value)} className={`flex min-h-28 flex-col items-center justify-center rounded-[14px] border p-3 transition-[border-color,box-shadow,transform] duration-300 ${form.propertyType === option.value ? 'border-[#333333] shadow-[0_8px_20px_rgba(51,51,51,0.12)]' : 'border-black/10 hover:-translate-y-0.5 hover:border-[#333333]/40'}`}>
                  <span className="text-3xl" aria-hidden>{option.icon}</span>
                  <span className="mt-3 rounded-md bg-[#666666] px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-white">{option.label}</span>
                </button>
              ))}
              {errors.propertyType && <p className="col-span-full text-xs text-red-600">{errors.propertyType}</p>}
            </div>
          )}

          {step === 4 && (
            <div className="mt-7 space-y-5">
              {selectedProperty && <p className="text-sm text-[#475569]">{form.intent === 'find' ? 'Tell us what you are searching for' : 'Tell us about the property you are listing'} - <strong className="text-[#333333]">{selectedProperty.label}</strong></p>}
              {fields.map(renderField)}
            </div>
          )}

          {step === 5 && !submitted && (
            <div className="mt-7 space-y-5">
              <div className="rounded-[16px] border border-black/10 bg-[#f8f8f6] p-4 text-sm leading-6 text-[#475569]">
                Please review the information below. You can go back to Step 4 to make changes before submitting.
              </div>
              {[...reviewSections, ...detailReviewSections].map((section) => section.rows.length > 0 && (
                <section key={section.title} className="rounded-[16px] border border-black/10 bg-white p-4">
                  <h3 className="border-b border-black/10 pb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#64748b]">{section.title}</h3>
                  <dl className="mt-2 divide-y divide-black/5">
                    {section.rows.map(([label, value]) => (
                      <div key={label} className="flex items-start justify-between gap-5 py-3 text-sm">
                        <dt className="text-[#64748b]">{label}</dt>
                        <dd className="max-w-[65%] text-right font-semibold leading-6 text-[#333333]">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </section>
              ))}
            </div>
          )}

          {step === 5 && submitted && (
            <div className="mt-12 rounded-[18px] bg-[#333333] px-6 py-10 text-center text-white">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#ffd500] text-2xl font-bold text-[#333333]">&#10003;</div>
              <h3 className="mt-5 text-2xl font-semibold">Request submitted</h3>
              <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-white/75">Thank you, {form.fullName.split(' ')[0] || 'there'}. Our team will review your details and get in touch shortly.</p>
            </div>
          )}

          {!submitted && <div className="mt-8 border-t border-black/10 pt-5">
            <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center">
              {step > 1 && <button type="button" onClick={handleBack} className="inline-flex justify-center rounded-full bg-[#f0f0f0] px-5 py-3 text-sm font-semibold text-[#333333] transition-colors duration-200 hover:bg-[#e5e5e5]">&larr; Back</button>}
              {step === 5 ? (
                <button type="button" onClick={handleSubmit} className="inline-flex flex-1 justify-center rounded-full bg-[#ffd500] px-5 py-3 text-sm font-semibold text-[#222222] transition-transform duration-200 hover:-translate-y-0.5">Submit Request &rarr;</button>
              ) : (
                <button type="button" onClick={handleNext} className="inline-flex flex-1 justify-center rounded-full bg-[#111111] px-5 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5">
                  {step === 4 ? 'Review' : 'Continue'} &rarr;
                </button>
              )}
            </div>
            {step < 5 && <button type="button" onClick={handleSave} className="mt-3 w-full rounded-full border border-black/10 px-5 py-2.5 text-sm text-[#64748b] transition-colors duration-200 hover:border-[#333333]/30 hover:text-[#333333]">Save &amp; Continue Later</button>}
            {saved && <p className="mt-3 text-center text-xs text-[#64748b]">Progress saved in this browser.</p>}
          </div>}
        </div>
      </div>
    </div>
  );
}

export default function LeasePage() {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [inquiryType, setInquiryType] = useState<InquiryType>('Discuss Your Property');
  const [inquiryPropertyType, setInquiryPropertyType] = useState('');

  const toggleSection = (title: string) => {
    setOpenSection((current) => (current === title ? null : title));
  };

  const openInquiry = (type: InquiryType, propertyType = '') => {
    setInquiryType(type);
    setInquiryPropertyType(propertyType);
    setInquiryOpen(true);
  };

  return (
    <main className="min-h-screen bg-white text-[#333333]">
      <div className="w-full bg-white p-4 sm:p-6 lg:p-8">
        <SiteHeader />

        <section className="grid gap-10 py-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:py-20">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-[#64748b]">Property | Lease</p>
            <h1 className="mt-4 max-w-2xl text-5xl font-semibold tracking-[-0.05em] text-[#222222] sm:text-6xl">
              Activate Value. Secure Cash Flow. Elevate Asset Performance.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#475569]">
              <strong className="text-[#333333]">At Avinell x Cantagali</strong>, leasing goes beyond filling
              space - it is about positioning assets to perform sustainably within Nigeria&apos;s evolving real estate
              market.
            </p>
            <p className="mt-5 max-w-xl text-lg leading-8 text-[#475569]">
              We work with landlords and developers across Nigeria to lease commercial and mixed-use assets to
              credible, high-quality tenants. Our leasing strategy balances local market demand with investor
              expectations, ensuring assets remain competitive, resilient, and income-generating over the long term.
            </p>
            <p className="mt-5 max-w-xl text-lg leading-8 text-[#475569]">
              By leveraging strong local execution and international leasing standards, we secure optimal terms,
              reduce vacancy risk, and enhance asset value - whether the property is in a prime urban centre or a
              fast-growing secondary market.
            </p>
            <a
              href="#leasing-journey"
              className="mt-8 inline-flex rounded-full bg-[#ffd500] px-6 py-3.5 text-sm font-semibold text-[#333333] shadow-[0_10px_28px_rgba(255,213,0,0.24)] transition-transform duration-200 hover:-translate-y-0.5"
            >
              Start Your Leasing Journey
            </a>
          </div>

          <div className="relative min-h-[380px] overflow-hidden rounded-[24px] bg-[#333333] lg:min-h-[560px]">
            <Image
              src="/images/Advisory.jpg"
              alt="Avinell leasing and property advisory services"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(51,51,51,0.05),rgba(51,51,51,0.6))]" />
            <div className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#333333]">
              Leasing services
            </div>
            <div className="absolute bottom-5 left-5 right-5 rounded-[18px] bg-white/95 p-5">
              <p className="text-sm uppercase tracking-[0.2em] text-[#64748b]">Asset performance</p>
              <p className="mt-2 text-lg font-medium leading-7 text-[#333333]">
                From occupancy to long-term value, the right lease creates durable performance.
              </p>
            </div>
          </div>
        </section>

        <section className="grid gap-10 border-t border-black/10 py-12 lg:grid-cols-[0.8fr_1.2fr] lg:py-16">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-[#64748b]">Our approach</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-[#222222]">Leasing built around value</h2>
            <p className="mt-5 max-w-md text-base leading-8 text-[#475569]">
              We combine local market intelligence with international leasing standards to secure the right tenant,
              the right terms, and the right long-term outcome.
            </p>
          </div>

          <div>
            <Accordion title="Our Leasing Services Include" open={openSection === 'Our Leasing Services Include'} onToggle={() => toggleSection('Our Leasing Services Include')}>
              <ul className="space-y-4">
                {leasingServices.map((service) => (
                  <li key={service.title}>
                    <strong className="text-[#333333]">{service.title}:</strong> {service.text}
                  </li>
                ))}
              </ul>
            </Accordion>
            <Accordion title="Who We Serve" open={openSection === 'Who We Serve'} onToggle={() => toggleSection('Who We Serve')}>
              <ul className="list-disc space-y-3 pl-5">
                {audiences.map((audience) => <li key={audience}>{audience}</li>)}
              </ul>
            </Accordion>
            <Accordion title="The Avinell Advantage" open={openSection === 'The Avinell Advantage'} onToggle={() => toggleSection('The Avinell Advantage')}>
              <ul className="space-y-4">
                {advantages.map((advantage) => (
                  <li key={advantage.title}>
                    <strong className="text-[#333333]">{advantage.title}:</strong> {advantage.text}
                  </li>
                ))}
              </ul>
            </Accordion>
          </div>
        </section>

        <section id="leasing-journey" className="border-t border-black/10 py-12 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-[#64748b]">Next step</p>
              <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-[#222222]">Looking to Lease Your Property?</h2>
              <p className="mt-5 max-w-md text-base leading-8 text-[#475569]">
                Let&apos;s evaluate it together. We will assess market conditions, advise on positioning, and tap into
                our tenant network to ensure optimal occupancy and returns.
              </p>
              <button
                type="button"
                onClick={() => openInquiry('Discuss Your Property')}
                className="mt-6 inline-flex rounded-full bg-[#ffd500] px-6 py-3.5 text-sm font-semibold text-[#333333] shadow-[0_10px_28px_rgba(255,213,0,0.2)] transition-transform duration-200 hover:-translate-y-0.5"
              >
                Discuss Your Property
              </button>
            </div>

            <div className="rounded-[24px] bg-[#333333] p-6 text-white sm:p-8">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-white/55">Start your leasing journey</p>
                  <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em]">Tell us who you are</h3>
                </div>
                <span className="text-sm text-white/55">Step 1 of 5</span>
              </div>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/75">
                We&apos;ll match you with the right leasing or listing process. Start by choosing the route that fits
                your objective and property.
              </p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() => openInquiry('List a Property')}
                  className="rounded-[16px] border border-white/20 px-4 py-4 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white hover:text-[#333333]"
                >
                  List a Property
                </button>
                <button
                  type="button"
                  onClick={() => openInquiry('Find a Property')}
                  className="rounded-[16px] border border-white/20 px-4 py-4 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white hover:text-[#333333]"
                >
                  Find a Property
                </button>
              </div>
              <div className="mt-8 border-t border-white/15 pt-6">
                <p className="text-sm uppercase tracking-[0.2em] text-white/55">Property type</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {propertyTypes.map((propertyType) => (
                    <button
                      key={propertyType}
                      type="button"
                      onClick={() => openInquiry('Discuss Your Property', propertyType)}
                      className="rounded-full bg-white/10 px-3 py-2 text-xs text-white/80 transition-colors duration-200 hover:bg-[#ffd500] hover:text-[#333333]"
                    >
                      {propertyType}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-black/10 pt-6 text-sm text-[#64748b]">
          CRE Advisory Firm - AvinellCantagali
        </footer>
      </div>

      <InquiryModal
        key={`${inquiryOpen}-${inquiryType}-${inquiryPropertyType}`}
        open={inquiryOpen}
        inquiryType={inquiryType}
        propertyType={inquiryPropertyType}
        onClose={() => setInquiryOpen(false)}
      />
    </main>
  );
}
