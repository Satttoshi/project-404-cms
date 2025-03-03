'use client';

import React from 'react';
import { Text } from '@repo/ui';
import type { TextProps } from '@repo/ui';

// Pre-wrapped client versions of your components
export const ClientText = (props: TextProps) => <Text {...props} />;
