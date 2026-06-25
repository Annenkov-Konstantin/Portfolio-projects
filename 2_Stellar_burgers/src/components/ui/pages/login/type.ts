import { Dispatch, SetStateAction, SyntheticEvent } from 'react';

export interface LoginUIProps {
  errorText: string;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
  handleSubmit: (e: SyntheticEvent) => void;
  isLoading?: boolean;
  isValid?: boolean;
  fieldErrors?: {
    email?: string;
    password?: string;
  };
}
