import { useMutation, useQuery } from '@tanstack/react-query';

interface IUseFetchData {
  fetchService: () => Promise<any>;
  queryKey: string;
}

export const useQueryData = ({ fetchService, queryKey }: IUseFetchData) => {
  const { isLoading, refetch, isError } = useQuery<any, Error>({
    queryKey: [queryKey],
    queryFn: () => fetchService(),
  });

  // const { isLoading, refetch } = useQuery<
  //   any,
  //   Error
  // >(
  //   ['query'],
  //   fetchService,
  //   {
  //     onSuccess: (res) => {
  //       return (formatResponse(res));
  //     },
  //     onError: (err: any) => {
  //       setResult(formatResponse(err.response?.data || err));
  //     },
  //   }
  // );

  // const fetchData = () => {
  //   try {
  //     mutate();
  //   } catch (err) {
  //     setResult(formatResponse(err));
  //   }
  // };

  // const registerSubmitHandler = (data: FieldValues, e: any) => {
  //   e.preventDefault();
  //   setPostBoardName(data.boardName);
  //   const resData = registerUserRequest();
  //   setRegisterResult(formatResponse(resData));
  // };

  // useEffect(() => {
  //   if (registerLoading) setRegisterResult('posting...');
  // }, [registerLoading]);

  return {
    isLoading,
    refetch,
    isError,
  };
};
