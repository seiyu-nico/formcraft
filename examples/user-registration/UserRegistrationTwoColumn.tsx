import React from 'react';
import { Section } from '../../src/components/layout/Section';
import { Grid } from '../../src/components/layout/Grid';
import { TextInput } from '../../src/components/fields/TextInput';
import { TextArea } from '../../src/components/fields/TextArea';

export const UserRegistrationTwoColumn: React.FC = () => {
  return (
    <div className="mx-auto max-w-7xl p-6">
      <Grid columns={{ default: 1, lg: 2 }}>
        {/* Left Column Sections */}
        <Section
          heading="Personal Information"
          description="Please provide your basic personal details"
          icon={
            <svg className="h-full w-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          }
          iconColor="primary"
        >
          <Grid columns={{ default: 1, md: 2 }}>
            <TextInput name="firstName" label="First Name" placeholder="John" required />
            <TextInput name="lastName" label="Last Name" placeholder="Doe" required />
          </Grid>
          <TextInput
            name="email"
            label="Email Address"
            type="email"
            placeholder="john.doe@example.com"
            required
          />
          <TextInput name="phone" label="Phone Number" type="tel" placeholder="+1 (555) 123-4567" />
        </Section>

        {/* Right Column Sections */}
        <Section
          heading="Account Details"
          description="Create your account credentials"
          icon={
            <svg className="h-full w-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          }
          iconColor="success"
        >
          <TextInput name="username" label="Username" placeholder="johndoe" required />
          <Grid columns={{ default: 1, md: 2 }}>
            <TextInput
              name="password"
              label="Password"
              type="password"
              placeholder="••••••••"
              required
              revealable
            />
            <TextInput
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              placeholder="••••••••"
              required
              revealable
            />
          </Grid>
        </Section>

        {/* Address Information */}
        <Section
          heading="Address Information"
          description="Optional: Provide your address details"
          icon={
            <svg className="h-full w-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          }
          iconColor="info"
        >
          <TextInput name="streetAddress" label="Street Address" placeholder="123 Main Street" />
          <Grid columns={{ default: 1, md: 3 }}>
            <TextInput name="city" label="City" placeholder="New York" />
            <TextInput name="state" label="State/Province" placeholder="NY" />
            <TextInput name="zipCode" label="ZIP/Postal Code" placeholder="10001" />
          </Grid>
        </Section>

        {/* Additional Information */}
        <Section
          heading="Additional Information"
          description="Tell us more about yourself (optional)"
          icon={
            <svg className="h-full w-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          }
          iconColor="warning"
        >
          <TextArea
            name="bio"
            label="Biography"
            placeholder="Tell us about yourself..."
            rows={4}
            maxLength={500}
          />
          <TextInput name="website" label="Website" type="url" placeholder="https://example.com" />
        </Section>
      </Grid>
    </div>
  );
};
