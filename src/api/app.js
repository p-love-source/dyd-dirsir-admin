// 
import Http from "@/test-net/test-http";

// 获取侧边菜单栏
export function getSidebar() {
    return Http({
        url: "/sidebar",
        method: "GET"
    })
}