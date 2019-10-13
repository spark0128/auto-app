import React from 'react';
import { Ionicons } from '@expo/vector-icons';

export default function HeaderIcon(props) {
  return (
    <Ionicons
      name={props.name}
      size={26}
      style={{ marginLeft: 22 }}
      color="#000"
    />
  );
}
