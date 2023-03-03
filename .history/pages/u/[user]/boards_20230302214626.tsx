import UserBoard from '../../../components/Users/UserBoard';
// import { hasCookie, getCookies } from 'cookies-next';
import { parseCookies } from 'nookies';
import { convertTypeAcquisitionFromJson } from 'typescript';
import Router, { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getLocalStorage } from '../../../lib/utils/localStorage';

const UserBoardsPage = () => {
  return <UserBoard />;
};

export default UserBoardsPage;
