import { create } from 'zustand';
export { useStore };

const baseURL = 'https://localhost:8080'
const useStore = create((set, get) => ({
    user: "", 
    setUser: (user) => set({ user }),
    post: "",
    setPost: (post) => set({ post }),
    
    getPosts: async () => {
        const res = await fetch(`${baseURL}/api/posts`);
        const posts = await res.json();
        return posts
    }
})
  

export default useStore;