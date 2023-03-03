import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@tanstack/react-query';
import { Router, useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useForm, FieldValues } from 'react-hook-form';
import { shallow } from 'zustand/shallow';
import { authService } from '../../../services/authService';
import { useAuthRegisterStore } from '../../../store/authStore';
import { authSchema } from '../../utils/authSchema';
import { formatResponse } from '../../utils/formatResponse';

export const useAuthRegister = () => {
  const {
    mutateAsync,
    isLoading: registerLoading,
    isError,
  } = useMutation({
    mutationKey: ['register-user'],
    mutationFn: authService().registerUser,
  });

  return {
    isError,
    mutateAsync,
    registerLoading,
  };
};
