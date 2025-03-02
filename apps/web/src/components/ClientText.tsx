'use client';

import React from 'react';
import { EditText, Text } from '@repo/ui';
import type { EditTextProps, TextProps } from '@repo/ui';

// Pre-wrapped client versions of your components
export const ClientEditText = (props: EditTextProps) => <EditText {...props} />;
export const ClientText = (props: TextProps) => <Text {...props} />;
