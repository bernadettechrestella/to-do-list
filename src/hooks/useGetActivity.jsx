import { useEffect, useState } from "react";
import { deleteActivity, getActivities } from "../services/activity.services";

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

  return [activities, setActivities, handleDelete];
}