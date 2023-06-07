import { Sidebar } from "@/components/organisms/member/sidebar";
import { EditProfileContent } from "@/components/organisms/member/edit-profile";

export default function EditProfile() {
  return (
    <section className="overflow-auto bg-[#FBFCFD]">
      <Sidebar />
      <EditProfileContent />
    </section>
  );
}
