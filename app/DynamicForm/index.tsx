import { styled } from 'tamagui';
import React from 'react';
import { View } from 'react-native';
import { PropsWithChildren } from 'react';

import { Container } from './style';

interface DynamicFormPageProps {
  title: string;
}

export const DynamicFormPage: React.FC<PropsWithChildren<DynamicFormPageProps>> = ({ title, children }) => {
  return (
    <Container>
      <View>
        <h1>{title}</h1>
        {children}
      </View>
    </Container>
  );
};
