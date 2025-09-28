import WorksComponent from '@/components/pages/works/works.jsx';
import Footer from '@/components/common/footer.jsx';
import NavBar from '@/components/common/navBar';
import works from "@/data/works";

// 作品群を表示するページ
export default function Works() {
    return (
        <main className="mt-12 md:pt-14">
            <WorksComponent works={works}/>
            <Footer/>
            <NavBar />
        </main>
    );
}
