import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  getContacts,
  postContact,
  removeContact,
  updateContact,
} from "../../services/contactsServices";
import toast from "react-hot-toast";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const data = await getContacts();

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (newContact, thunkAPI) => {
    try {
      const data = await postContact(newContact);
      toast("Your contact has been successfully added!");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const data = await removeContact(contactId);
      toast("Your contact has been successfully deleted!");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const patchContact = createAsyncThunk(
  "contacts/patchContact",
  async (contactInfo, thunkAPI) => {
    try {
      const data = await updateContact(contactInfo);
      toast("Your contact has been successfully edited!");
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
