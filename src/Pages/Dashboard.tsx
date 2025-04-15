import DashboardHeader from "@/components/Dashboard/DashboardHeader";
import Sidebar from "@/components/Dashboard/SideBar";

const Dashboard = () => {
    return (
        <div className="w-full min-h-screen h-screen relative">
            <div className="h-[9%] flex items-center justify-center ">
                <DashboardHeader />
            </div>
            <div className="h-[91%] w-full fixed left-0">
                <Sidebar/>
            </div>
            <div className="min-h-[91%] absolute right-0 bg-gradient-to-br from-blue-500 to-purple-500 w-[85%] p-10 text-white">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis inventore quasi reiciendis soluta labore dolore facere, quia nihil qui quos illo provident voluptate temporibus! Cumque similique ab dicta distinctio voluptatem ea odit eligendi dolorem sequi consectetur aliquid deserunt assumenda nihil itaque, dolorum harum consequatur at qui magni cum, dolores quos id expedita. Aperiam excepturi officia blanditiis quae magnam quod vel. Voluptatem in fugiat suscipit, quibusdam odio esse neque excepturi voluptates, cupiditate numquam amet aut nam rem corrupti, voluptatibus earum perferendis recusandae! Ab sapiente iure necessitatibus architecto id reiciendis velit praesentium et adipisci consectetur perferendis aliquam assumenda deserunt, est eius sunt cumque? Natus magnam at fugiat expedita molestias. Impedit, doloremque aliquam. Reiciendis assumenda voluptatem culpa distinctio earum soluta, quae doloribus aut at temporibus necessitatibus laboriosam ea incidunt blanditiis deleniti rem optio voluptates. Impedit debitis sunt quia consequatur, harum amet reiciendis. Tempore saepe dolores quo accusamus quisquam cupiditate placeat impedit at enim, inventore distinctio est ex sequi repellendus nisi ut iure nihil incidunt repudiandae. Vel quo magnam vitae corporis quaerat ex minima laudantium aliquam dolore natus blanditiis, facilis minus porro omnis reprehenderit nisi dolorem. Modi aspernatur sed obcaecati error. Nihil exercitationem mollitia labore, minus aliquid unde aut soluta ipsa officiis numquam vitae modi animi distinctio hic totam necessitatibus illum eveniet fuga suscipit. Veritatis quis quas inventore voluptatem dolores. Eaque ea beatae labore placeat atque. Non explicabo laborum nesciunt placeat voluptatem repellendus fuga consequatur, culpa distinctio quisquam maxime praesentium eum quaerat sed, mollitia neque! Omnis, doloremque fugit laudantium minima illo consectetur adipisci voluptatibus accusamus, libero aperiam atque cum eos ipsum. Earum suscipit rerum minus aperiam, pariatur omnis veniam nam at harum molestias, eum dolores quasi alias vel dolor facilis natus dolorum? Fugiat illum dolorum maxime dicta, officia est vel facilis dolor tenetur necessitatibus, voluptas nobis repellendus unde doloremque laboriosam aliquid tempora natus commodi eveniet provident! Officiis aspernatur, magnam consequatur illo eius totam sed, iure aut explicabo quod similique, quam fugit in libero. A illum repellat sint reiciendis iste quasi 
            </div>
        </div>
    );
};

export default Dashboard;
