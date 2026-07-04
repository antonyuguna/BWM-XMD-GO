import { create } from 'zustand';

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

interface OperatorState {
  operatorId: string | null;
  user: User | null;
  isOnline: boolean;
  setOperatorId: (id: string) => void;
  setUser: (user: User) => void;
  toggleOnlineStatus: () => void;
}

interface LiveRequest {
  id: string;
  destination: string;
  budget: number;
  groupSize: number;
  expiresAt: Date;
}

interface RequestState {
  activeRequests: LiveRequest[];
  addRequest: (request: LiveRequest) => void;
  removeRequest: (id: string) => void;
}

type StoreState = OperatorState & RequestState;

export const useStore = create<StoreState>((set) => ({
  // Operator State
  operatorId: null,
  user: null,
  isOnline: false,
  setOperatorId: (id) => set({ operatorId: id }),
  setUser: (user) => set({ user }),
  toggleOnlineStatus: () => set((state) => ({ isOnline: !state.isOnline })),

  // Request State
  activeRequests: [],
  addRequest: (request) => set((state) => ({ activeRequests: [...state.activeRequests, request] })),
  removeRequest: (id) => set((state) => ({ activeRequests: state.activeRequests.filter(req => req.id !== id) })),
}));
