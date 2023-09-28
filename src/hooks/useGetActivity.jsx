import { useEffect, useState } from "react";
import { createActivity, deleteActivity, getActivities } from "../services/activity.services";

export const useGetActivity = () => {
  const [activities, setActivities] = useState([])

  useEffect(() => {
    getActivities((data) => {
      setActivities(data);
    })
  }, []);

  const handleDelete = (id) => {
    deleteActivity(id, (data) => {
      setActivities(activities.filter((activity) => activity.id !== id));
    })
  }

  const handleCreateActivity = (title, email) => {
    const data = {
      title: title || 'New Activity',
      email: email || 'bernadettechrestella@gmail.com',
    };
  
    createActivity(data.title, data.email, (data) => {
      setActivities([...activities, data]);
      console.log(data)
    });
  };

  return [activities, setActivities, handleDelete, handleCreateActivity];
}