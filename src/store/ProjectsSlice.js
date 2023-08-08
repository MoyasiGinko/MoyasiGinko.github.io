import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  projects: [],
};

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setProjects(state, action) {
      state.projects = action.payload;
    },
  },
});

export const { setProjects } = projectsSlice.actions;

import projectsData from './portfolio.json';
export default projectsSlice.reducer;

export const fetchProjects = () => async (dispatch) => {
  dispatch(setProjects(projectsData));
};
