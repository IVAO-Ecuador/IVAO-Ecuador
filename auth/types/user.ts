export type IUser = {
  id: number;
  firstName: string;
  lastName: string;
  divisionId: string;
  countryId: string;
  languageId: string;
  centerId: string;
  isStaff: boolean;
  createdAt: Date;
  rating: {
    isAtc: boolean;
    isPilot: boolean;
    pilotRating: {
      id: number;
      name: string;
      shortName: string;
      description: string;
    };
    atcRating: {
      id: number;
      name: string;
      shortName: string;
      description: string;
    };
  };
  hours: {
    atc: number;
    pilot: number;
    staff: number;
  };
  staffPositions: [
    {
      id: string;
      staffPositionId: string;
      divisionId: string;
      onTrial: boolean;
      description: string;
    }
  ];
  userStaffDetail: {
    email: string;
    note: string;
    description: string;
    remark: string;
  };
  prCreator: {
    description: string;
    tier: number;
  };
  ownedVirtualAirlines: [
    {
      id: number;
      name: string;
      airlineId: string;
      divisionId: string;
      website: string;
    }
  ];
  publicNickname: string;
};
