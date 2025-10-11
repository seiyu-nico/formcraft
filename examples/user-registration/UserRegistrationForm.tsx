import React from 'react';
import { Section } from '../../src/components/organisms/Section';
import { Grid } from '../../src/components/molecules/Grid';
import { TextInput } from '../../src/components/molecules/TextInput';
import { TextArea } from '../../src/components/molecules/TextArea';

export const UserRegistrationForm: React.FC = () => {
  return (
    <div className="mx-auto max-w-4xl space-y-6 p-6">
      {/* Personal Information Section */}
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
          <TextInput
            name="firstName"
            label="First Name"
            placeholder="John"
            required
            validate={(value) => {
              if (!value) return 'First name is required';
              if (value.length < 2) return 'First name must be at least 2 characters';
              return undefined;
            }}
          />
          <TextInput
            name="lastName"
            label="Last Name"
            placeholder="Doe"
            required
            validate={(value) => {
              if (!value) return 'Last name is required';
              if (value.length < 2) return 'Last name must be at least 2 characters';
              return undefined;
            }}
          />
        </Grid>

        <TextInput
          name="email"
          label="Email Address"
          type="email"
          placeholder="john.doe@example.com"
          required
          helperText="We'll never share your email with anyone else"
          validate={(value) => {
            if (!value) return 'Email is required';
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Invalid email format';
            return undefined;
          }}
        />

        <TextInput
          name="phone"
          label="Phone Number"
          type="tel"
          placeholder="+1 (555) 123-4567"
          helperText="Include country code for international numbers"
        />
      </Section>

      {/* Account Details Section */}
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
        <TextInput
          name="username"
          label="Username"
          placeholder="johndoe"
          required
          minLength={3}
          maxLength={20}
          helperText="3-20 characters, letters, numbers, and underscores only"
          validate={(value) => {
            if (!value) return 'Username is required';
            if (value.length < 3) return 'Username must be at least 3 characters';
            if (value.length > 20) return 'Username must be at most 20 characters';
            if (!/^[a-zA-Z0-9_]+$/.test(value))
              return 'Username can only contain letters, numbers, and underscores';
            return undefined;
          }}
        />

        <Grid columns={{ default: 1, md: 2 }}>
          <TextInput
            name="password"
            label="Password"
            type="password"
            placeholder="••••••••"
            required
            revealable
            minLength={8}
            helperText="At least 8 characters"
            validate={(value) => {
              if (!value) return 'Password is required';
              if (value.length < 8) return 'Password must be at least 8 characters';
              return undefined;
            }}
          />
          <TextInput
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            placeholder="••••••••"
            required
            revealable
            helperText="Re-enter your password"
          />
        </Grid>
      </Section>

      {/* Address Information Section */}
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
        collapsible
        collapsed
      >
        <TextInput
          name="streetAddress"
          label="Street Address"
          placeholder="123 Main Street"
        />

        <Grid columns={{ default: 1, md: 3 }}>
          <TextInput name="city" label="City" placeholder="New York" />
          <TextInput name="state" label="State/Province" placeholder="NY" />
          <TextInput name="zipCode" label="ZIP/Postal Code" placeholder="10001" />
        </Grid>

        <TextInput name="country" label="Country" placeholder="United States" />
      </Section>

      {/* Additional Information Section */}
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
        collapsible
        collapsed
      >
        <TextArea
          name="bio"
          label="Biography"
          placeholder="Tell us about yourself..."
          rows={6}
          maxLength={500}
          helperText="Maximum 500 characters"
        />

        <TextInput
          name="website"
          label="Website"
          type="url"
          placeholder="https://example.com"
          helperText="Your personal or professional website"
        />

        <TextInput
          name="referralCode"
          label="Referral Code"
          placeholder="FRIEND2024"
          helperText="If you have a referral code, enter it here"
        />
      </Section>

      {/* Submit Button */}
      <div className="flex justify-end gap-4 pt-4">
        <button
          type="button"
          className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600"
        >
          Create Account
        </button>
      </div>
    </div>
  );
};
