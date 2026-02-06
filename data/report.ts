export type ContentBlock =
    | { type: 'paragraph'; text: string }
    | { type: 'quote'; text: string; source?: string }
    | { type: 'list'; items: string[] }
    | { type: 'table'; headers: string[]; rows: string[][] };

export interface Section {
    title: string;
    id: string; // Keeping ID for internal structure but won't be displayed as "1.1"
    content: ContentBlock[];
}

export interface Chapter {
    title: string;
    id: string;
    intro?: string;
    sections: Section[];
}

export interface Reference {
    id: number;
    text: string; // Changed from structured object to single string for full APA format
}

export interface ReportData {
    title: string;
    subtitle: string;
    chapters: Chapter[];
    references: Reference[];
}

export const reportData: ReportData = {
    title: "Divine Providence: Israel and the Nations",
    subtitle: "Thần Học Về Sự Tuyển Chọn Israel Và Sự Quan Phòng Phổ Quát Của Thiên Chúa Đối Với Các Dân Tộc",
    chapters: [
        {
            id: "chapter-1",
            title: "Chương 1: Dẫn Nhập - Nghịch Lý Của Sự Riêng Biệt và Tính Phổ Quát Trong Mặc Khải",
            intro: "Trong lịch sử tư tưởng tôn giáo và thần học Judeo-Christian (Do Thái - Kitô giáo), một trong những vấn đề cốt lõi và thường gây tranh luận nhất chính là sự căng thẳng biện chứng giữa tính \"riêng biệt\" (particularity) và tính \"phổ quát\" (universality). Câu hỏi được đặt ra: Tại sao một Thiên Chúa là Đấng Tạo Hóa của toàn thể vũ trụ, Đấng nắm giữ vận mệnh của mọi loài thụ tạo, lại chọn thiết lập một mối quan hệ giao ước đặc thù, dường như mang tính độc quyền, với một nhóm người nhỏ bé ở vùng Cận Đông cổ đại là Israel? Và nếu Thiên Chúa đã dành cho Israel sự \"gìn giữ và bảo vệ\" đặc biệt, thì vị thế bản thể học và thần học của \"các dân tộc khác\" (the nations/gentiles) là gì trong kế hoạch của Ngài? Liệu họ chỉ là những vai phụ mờ nhạt, những đối tượng của cơn thịnh nộ, hay họ cũng là những người thừa hưởng một dạng thức quan phòng (providence) và yêu thương khác của Đấng Tối Cao?",
            sections: [
                {
                    id: "section-1-1",
                    title: "Mục Tiêu Báo Cáo",
                    content: [
                        {
                            type: 'paragraph',
                            text: "Báo cáo này không chỉ đơn thuần liệt kê các dữ kiện Kinh Thánh mà sẽ đi sâu vào phân tích cấu trúc thần học của sự tuyển chọn (Divine Election) và sự quan phòng (Divine Providence). Chúng ta sẽ khảo sát các bằng chứng văn bản từ Ngũ Thư (Torah), các Sách Ngôn Sứ (Nevi'im), và Văn Chương Khôn Ngoan (Ketuvim) để chứng minh rằng: Sự tuyển chọn Israel không bao giờ là một sự ưu ái mang tính loại trừ (exclusionary favoritism), mà là một chiến lược thần linh mang tính công cụ (instrumental strategy) nhằm mục đích cuối cùng là chúc phúc cho toàn thể nhân loại. Bên cạnh đó, chúng ta sẽ làm sáng tỏ cơ chế \"Quan phòng chung\" (General Providence) mà Thiên Chúa áp dụng cho mọi quốc gia, từ việc duy trì trật tự tự nhiên đến việc can thiệp vào các biến cố chính trị và lịch sử của các đế quốc ngoại bang như Ai Cập, Assyria, và Ba Tư."
                        },
                        {
                            type: 'paragraph',
                            text: "Thông qua việc phân tích sâu các trường hợp điển hình như Melchizedek, Balaam, Cyrus, và các sấm ngôn của Amos và Isaia, báo cáo sẽ tái hiện một bức tranh toàn cảnh nơi Thiên Chúa không chỉ là \"Đức Chúa của Israel\" mà còn là \"Vua của muôn dân\" (Jeremiah 10:7), Đấng nắm giữ quyền bính trên mọi biên giới và thời đại."
                        }
                    ]
                }
            ]
        },
        {
            id: "chapter-2",
            title: "Chương 2: Bản Chất Thần Học Của Sự Tuyển Chọn (Divine Election) - Đặc Quyền Hay Sứ Mạng?",
            intro: "Để hiểu đúng về số phận của các dân tộc khác, trước hết cần phải giải cấu trúc (deconstruct) khái niệm về sự tuyển chọn Israel. Một sự hiểu lầm phổ biến, thường xuất hiện trong cả tư duy tôn giáo bình dân lẫn những phê bình từ bên ngoài, là coi sự tuyển chọn như một tấm vé bảo hiểm vĩnh cửu, ban cho Israel đặc quyền được miễn trừ khỏi các quy luật đạo đức chung hoặc được Thiên Chúa thiên vị một cách bất công.",
            sections: [
                {
                    id: "section-2-1",
                    title: "Sự Tuyển Chọn Không Dựa Trên Công Trạng (Unmerited Election)",
                    content: [
                        {
                            type: 'paragraph',
                            text: "Ngay từ những trang đầu của lịch sử cứu độ, Kinh Thánh đã nỗ lực loại bỏ ý niệm rằng Israel được chọn vì họ ưu việt hơn các dân tộc khác về mặt văn hóa, đạo đức, hay quân sự. Trong sách Đệ Nhị Luật, Môsê đã đưa ra một tuyên bố thần học mang tính nền tảng:"
                        },
                        {
                            type: 'quote',
                            text: "\"Đức Chúa đã đem lòng quyến luyến và chọn anh em, không phải vì anh em đông hơn mọi dân khác, thật ra anh em là dân nhỏ nhất trong các dân. Nhưng chính là vì Đức Chúa yêu thương anh em và giữ lời thề Người đã thề với cha ông anh em.\"",
                            source: "Đnl 7:7-8 [1]"
                        },
                        {
                            type: 'paragraph',
                            text: "Điều này thiết lập nguyên tắc \"Sola Gratia\" (Chỉ nhờ ân sủng) trong Cựu Ước. Israel không sở hữu một phẩm chất nội tại nào khiến họ xứng đáng được bảo vệ hơn người Ai Cập hay người Canaan. Vị thế của họ hoàn toàn dựa trên ý định tự do của Thiên Chúa. Sự tuyển chọn, do đó, không phải là sự khẳng định về sự vượt trội của Israel đối với các dân tộc khác, mà là sự khẳng định về sự trung tín của Thiên Chúa đối với kế hoạch của chính Ngài."
                        },
                        {
                            type: 'paragraph',
                            text: "Hơn nữa, các ngôn sứ liên tục nhắc nhở Israel rằng sự \"gìn giữ và bảo vệ\" của Thiên Chúa không phải là vô điều kiện theo kiểu dung túng. Amos, vị ngôn sứ của công lý xã hội, đã lật ngược logic của sự tuyển chọn: \"Trong mọi họ hàng trên mặt đất, Ta chỉ biết có các ngươi; nên Ta sẽ trừng phạt các ngươi vì mọi tội lỗi các ngươi phạm\" (Amos 3:2) [2]. Ở đây, sự \"biết\" (yada - một từ chỉ mối quan hệ thân thiết trong giao ước) không dẫn đến sự nuông chiều, mà dẫn đến một tiêu chuẩn phán xét nghiêm khắc hơn. Israel được bảo vệ, nhưng cũng bị kỷ luật nặng nề hơn bất kỳ dân tộc nào khác, chính vì họ được chọn."
                        }
                    ]
                },
                {
                    id: "section-2-2",
                    title: "Tuyển Chọn Công Cụ (Instrumental Election): Israel Như Một \"Dân Tư Tế\"",
                    content: [
                        {
                            type: 'paragraph',
                            text: "Mục đích của sự tuyển chọn không kết thúc nơi chính Israel. Thần học Cựu Ước nhấn mạnh khái niệm \"Tuyển chọn công cụ\". Khi Thiên Chúa gọi Abraham, Ngài đã đưa ra một lời hứa mang tính lập trình cho toàn bộ lịch sử: \"Nhờ ngươi, mọi gia tộc trên mặt đất sẽ được chúc phúc\" (Sáng Thế 12:3) [3]. Đây là \"Đại Mạng Lệnh\" (Great Commission) của Cựu Ước."
                        },
                        {
                            type: 'paragraph',
                            text: "Tại núi Sinai, căn tính của Israel được xác định là \"một vương quốc tư tế và một dân thánh\" (Xuất Hành 19:6) [2]. Trong thế giới cổ đại, vai trò của tư tế là trung gian. Tư tế không sống cho chính mình; ông ta đứng giữa thần linh và nhân loại để dâng tế lễ và truyền đạt ý muốn của thần linh. Nếu Israel là \"tư tế\", thì ai là \"giáo dân\"? Đó chính là các dân tộc trên thế giới (Gentiles)."
                        },
                        {
                            type: 'list',
                            items: [
                                "Israel được gìn giữ để bảo tồn sự mặc khải về Thiên Chúa Duy Nhất (Monotheism) giữa một thế giới đa thần.",
                                "Israel được bảo vệ để làm nơi chuẩn bị cho Đấng Messiah, Đấng sẽ mang ơn cứu độ đến tận cùng trái đất. [2]",
                                "Israel đóng vai trò như một \"mẫu vật trưng bày\" (demonstration plot) về cách Thiên Chúa tương tác với con người – ban phước khi vâng lời và sửa phạt khi bất tuân – để các dân tộc khác nhìn vào đó mà học biết đường lối của Ngài."
                            ]
                        }
                    ]
                },
                {
                    id: "section-2-3",
                    title: "Sự Tuyển Chọn Của Israel Trong Bối Cảnh Của Các Dân Tộc",
                    content: [
                        {
                            type: 'paragraph',
                            text: "Các học giả như Walter Brueggemann và các nhà thần học hiện đại đã chỉ ra rằng, Israel thường xuyên rơi vào cám dỗ \"độc quyền hóa\" Thiên Chúa, tin rằng sự chọn lựa này là một bức tường ngăn cách họ khỏi thế giới [5]. Tuy nhiên, cấu trúc của Kinh Thánh lại kể một câu chuyện khác. Sự tuyển chọn Israel nằm bên trong khung cảnh rộng lớn của sự sáng tạo và quan phòng dành cho mọi dân tộc. Không có sự tuyển chọn nào mà không đi kèm với sứ mạng (commission) [6]. Sự tồn tại của Israel là vì lợi ích của các dân tộc (pro-nations), không phải chống lại họ (anti-nations)."
                        }
                    ]
                }
            ]
        },
        {
            id: "chapter-3",
            title: "Chương 3: Thiên Chúa Của Các Dân Tộc - Sự Quan Phòng Trước Và Ngoài Giao Ước Abraham",
            intro: "Trước khi có Abraham, trước khi có Israel, Thiên Chúa đã là Thiên Chúa của toàn thể nhân loại. Sách Sáng Thế chương 1-11, thường được gọi là \"Lịch sử Nguyên thủy\" (Primeval History), xử lý các vấn đề của toàn nhân loại, không riêng gì người Do Thái. Giao ước đầu tiên được thiết lập không phải với Abraham, mà là với Noah – đại diện cho toàn thể nhân loại và mọi sinh vật sau cơn Đại Hồng Thủy [7].",
            sections: [
                {
                    id: "section-3-1",
                    title: "Giao Ước Noah và Luật Tự Nhiên (The Noachide Covenant)",
                    content: [
                        {
                            type: 'paragraph',
                            text: "Giao ước với Noah (Sáng Thế 9) là một giao ước phổ quát. Thiên Chúa cam kết bảo tồn các chu kỳ tự nhiên (\"bao lâu đất này còn, thì mùa gieo mùa gặt... sẽ không bao giờ ngưng\") và thiết lập các quy tắc đạo đức căn bản cho sự sống con người (cấm đổ máu, tôn trọng sự sống) [8]. Đây là nền tảng thần học cho khái niệm \"Quan phòng chung\" (General Providence). Mọi dân tộc, dù có biết đến Luật Môsê hay không, đều sống dưới sự bảo trợ của Giao ước Noah này. Họ được Thiên Chúa ban cho sự sống, tài nguyên thiên nhiên, và một lương tâm đạo đức để duy trì xã hội [8]."
                        }
                    ]
                },
                {
                    id: "section-3-2",
                    title: "Melchizedek: Một \"Dị Biệt\" Thần Học Đầy Ý Nghĩa",
                    content: [
                        {
                            type: 'paragraph',
                            text: "Sự xuất hiện của Melchizedek trong Sáng Thế Ký 14 là một trong những bằng chứng mạnh mẽ nhất về việc Thiên Chúa hoạt động bên ngoài dòng dõi Abraham. Melchizedek là vua của Salem (sau này là Jerusalem) và là \"tư tế của Thiên Chúa Tối Cao\" (El Elyon) [9]."
                        },
                        {
                            type: 'list',
                            items: [
                                "Vị thế phi Israel: Ông không phải là người Do Thái, không thuộc dòng dõi Abraham, không có Luật Môsê. Tuy nhiên, Kinh Thánh công nhận ông là một tư tế hợp pháp của Thiên Chúa thật. [10]",
                                "Hành động chúc phúc: Abraham, người được chọn, lại nhận sự chúc phúc từ Melchizedek và dâng một phần mười chiến lợi phẩm cho ông. Tác giả Thư gửi tín hữu Do Thái lập luận rằng \"người nào chúc phúc thì lớn hơn người được chúc phúc\" (Do Thái 7:7), ngụ ý một vị thế thuộc linh cao trọng của Melchizedek. [11]",
                                "Ý nghĩa thần học: Melchizedek chứng minh rằng sự hiểu biết và thờ phượng Thiên Chúa không bị giới hạn trong biên giới của sự tuyển chọn Israel. Thiên Chúa đã có những \"nhân chứng\" của Ngài rải rác giữa các dân tộc, những người thờ phượng Ngài dưới những danh xưng khác nhau (như El Elyon) nhưng vẫn được chấp nhận. [12] Điều này phá vỡ quan niệm cho rằng bên ngoài Israel chỉ có bóng tối và sự nguyền rủa."
                            ]
                        }
                    ]
                },
                {
                    id: "section-3-3",
                    title: "Balaam và Sự Mặc Khải Bên Ngoài Biên Giới",
                    content: [
                        {
                            type: 'paragraph',
                            text: "Câu chuyện về Balaam trong sách Dân Số (Numbers 22-24) cung cấp một cái nhìn sâu sắc khác. Balaam là một thầy bói toán người vùng Lưỡng Hà (Mesopotamia), được vua Moab thuê để nguyền rủa Israel. Mặc dù Balaam là một nhân vật đầy mâu thuẫn và sau này bị lên án vì sự tham lam (Giuda 1:11, Khải Huyền 2:14), nhưng thực tế là Thần Khí của Thiên Chúa đã ngự xuống trên ông và ông đã nói ra những lời sấm ngôn chân thật về Đấng Messiah [14]."
                        },
                        {
                            type: 'list',
                            items: [
                                "Điều này khẳng định quyền tể trị tuyệt đối của Thiên Chúa: Ngài có thể sử dụng môi miệng của một pháp sư ngoại giáo để công bố chân lý của Ngài. [16]",
                                "Nó cũng cho thấy rằng \"kênh\" mặc khải của Thiên Chúa rộng lớn hơn chúng ta tưởng. Dân ngoại cũng có thể nhận được những tia sáng của chân lý tiên tri, dù họ có thể không sống trọn vẹn theo chân lý đó."
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: "chapter-4",
            title: "Chương 4: Tính Phổ Quát Trong Các Sách Ngôn Sứ: Khi Kẻ Thù Trở Thành \"Dân Ta\"",
            intro: "Các Sách Ngôn Sứ (Prophetic Books) thường bị hiểu lầm là chỉ chứa đựng những lời đoán phạt khốc liệt chống lại các dân tộc (Oracles against the Nations). Tuy nhiên, ẩn sâu trong những lời cảnh báo đó là một thần học sâu sắc về sự quan tâm của Thiên Chúa đối với vận mệnh của các quốc gia. Thiên Chúa phán xét họ chính vì Ngài quan tâm đến hành vi đạo đức của họ và coi họ là những chủ thể có trách nhiệm [8].",
            sections: [
                {
                    id: "section-4-1",
                    title: "Amos 9:7 - Cuộc Cách Mạng Về Quan Niệm Lịch Sử",
                    content: [
                        {
                            type: 'paragraph',
                            text: "Không có đoạn văn nào thách thức chủ nghĩa dân tộc biệt lập mạnh mẽ hơn Amos 9:7. Trong khi Israel tự hào về cuộc Xuất Hành (Exodus) khỏi Ai Cập như là bằng chứng độc quyền về sự bảo vệ của Thiên Chúa, Amos tuyên bố:"
                        },
                        {
                            type: 'quote',
                            text: "\"Hỡi con cái Ít-ra-en, đối với Ta, các ngươi lại chẳng như con cái Cút (Ethiopia) đó sao? - sấm ngôn của ĐỨC CHÚA. Ta đã chẳng đưa Ít-ra-en lên khỏi đất Ai-cập, cũng như đưa người Phil-li-tinh lên khỏi Kháp-to, và người A-ram lên khỏi Kia đó sao?\"",
                            source: "Amos 9:7 [5]"
                        },
                        {
                            type: 'paragraph',
                            text: "Đoạn văn này chứa đựng ba cú sốc thần học lớn:"
                        },
                        {
                            type: 'list',
                            items: [
                                "Sự bình đẳng hóa: So sánh Israel với người Ethiopia (Cushites) - một dân tộc da màu xa xôi ở tận cùng thế giới biết được lúc bấy giờ - là một cách để Thiên Chúa nói rằng: \"Các ngươi không có gì đặc biệt hơn họ về mặt nhân quyền hay phẩm giá trước mặt Ta.\" [5]",
                                "Đa dạng hóa các cuộc \"Exodus\": Amos sử dụng động từ alah (đưa lên), cùng một động từ dùng cho cuộc Xuất Hành của Israel, để mô tả việc di dân của người Philitinh và người Aram. Người Philitinh là kẻ thù không đội trời chung của Israel, và người Aram là mối đe dọa quân sự thường trực. Việc Thiên Chúa tuyên bố Ngài là người đứng sau cuộc di cư và định cư của chính kẻ thù Israel là một sự mặc khải chấn động. [5]",
                                "Chủ quyền trên lịch sử địa chính trị: Điều này hàm ý rằng mọi sự chuyển dịch dân cư, mọi sự hình thành biên giới quốc gia đều nằm trong sự quan phòng của Thiên Chúa. Ngài ban đất Canaan cho Israel, nhưng Ngài cũng ban đất Caphtor cho người Philitinh và đất Kir cho người Aram. Sự \"gìn giữ\" của Chúa về mặt lãnh thổ và sự tồn tại dân tộc là món quà phổ quát."
                            ]
                        }
                    ]
                },
                {
                    id: "section-4-2",
                    title: "Isaia 19:23-25 - Liên Minh Được Chúc Phúc (The Blessed Triad)",
                    content: [
                        {
                            type: 'paragraph',
                            text: "Nếu Amos nhìn về quá khứ, Isaia nhìn về tương lai cánh chung (Eschaton). Trong bối cảnh thế kỷ thứ 8 TCN, khi Ai Cập và Assyria là hai siêu cường kẹp chặt và đe dọa sự tồn vong của Israel, Isaia đưa ra một viễn tượng hòa bình không tưởng:"
                        },
                        {
                            type: 'quote',
                            text: "\"Ngày ấy, sẽ có một con đường đi từ Ai-cập đến Át-sua... Israel sẽ là kẻ thứ ba liên kết với Ai-cập và Át-sua; đó sẽ là phúc lành giữa lòng đất. Đức Chúa các đạo binh sẽ chúc phúc cho các xứ ấy rằng: 'Phúc thay dân Ai-cập của Ta (My People), phúc thay Át-sua, công trình tay Ta làm ra (The Work of My Hands), và Ít-ra-en, cơ nghiệp của Ta (My Inheritance).'\"",
                            source: "Isaia 19:23-25 [18]"
                        },
                        {
                            type: 'table',
                            headers: ["Dân Tộc", "Danh Hiệu Truyền Thống", "Danh Hiệu Mới Trong Isaia 19", "Ý Nghĩa Thần Học"],
                            rows: [
                                ["Ai Cập", "Kẻ áp bức, Nhà nô lệ", "\"Dân Ta\" (Ammi)", "Ai Cập nhận được danh hiệu vốn chỉ dành riêng cho Israel (Hosea 2:23). Biểu thị sự chấp nhận hoàn toàn vào gia đình giao ước."],
                                ["Assyria", "Kẻ tàn bạo, \"Cây gậy thịnh nộ\"", "\"Công trình tay Ta\"", "Kẻ thù quân sự tàn bạo nhất được công nhận là tác phẩm sáng tạo và được yêu thương của Chúa."],
                                ["Israel", "Dân riêng, Con trưởng", "\"Cơ nghiệp của Ta\"", "Israel không bị thay thế, nhưng trở thành đối tác bình đẳng, chia sẻ phúc lành với các cựu thù."]
                            ]
                        },
                        {
                            type: 'paragraph',
                            text: "Đoạn văn này xóa bỏ ranh giới nhị nguyên \"Bạn - Thù\". Thiên Chúa không bảo vệ Israel bằng cách tiêu diệt vĩnh viễn Ai Cập và Assyria, mà bằng cách biến đổi họ (conversion) và đưa họ vào chung một cộng đồng thờ phượng. Sự cứu rỗi của Israel cuối cùng trở thành sự cứu rỗi cho cả thế giới [18]."
                        }
                    ]
                },
                {
                    id: "section-4-3",
                    title: "Sách Giô-na: Lòng Thương Xót Vượt Qua Chủ Nghĩa Dân Tộc",
                    content: [
                        {
                            type: 'paragraph',
                            text: "Sách Giô-na là một tác phẩm châm biếm sâu sắc nhắm vào thái độ hẹp hòi của Israel. Ngôn sứ Giô-na đại diện cho quan điểm muốn Thiên Chúa chỉ bảo vệ Israel và hủy diệt kẻ thù (Nineveh, thủ đô của Assyria). Nhưng Thiên Chúa lại ép buộc Giô-na đi rao giảng cho Nineveh để họ có cơ hội sám hối. Câu hỏi kết thúc sách Giô-na là lời tuyên ngôn về lòng thương xót phổ quát: \"Còn Ta, chẳng lẽ Ta lại không thương hại Ni-ni-vê, thành phố lớn, trong đó có hơn một trăm hai mươi ngàn người không phân biệt được bên phải với bên trái, và lại có rất nhiều thú vật hay sao?\" (Giô-na 4:11) [8]. Chi tiết \"thú vật\" (cattle) rất quan trọng – nó cho thấy sự quan tâm của Thiên Chúa (Providence) mở rộng đến cả hệ sinh thái và kinh tế của các dân tộc ngoại bang, không chỉ đời sống tâm linh của họ [17]."
                        }
                    ]
                }
            ]
        },
        {
            id: "chapter-5",
            title: "Chương 5: Những Công Cụ Của Sự Quan Phòng: Cyrus và Các Vị Vua Ngoại",
            intro: "Sự quan phòng của Thiên Chúa đối với các dân tộc không chỉ giới hạn ở việc ban phát lòng thương xót thuộc linh mà còn thể hiện qua việc Ngài sử dụng họ như những tác nhân chủ chốt trong lịch sử.",
            sections: [
                {
                    id: "section-5-1",
                    title: "Cyrus Đại Đế - Đấng Messiah Ngoại Giáo",
                    content: [
                        {
                            type: 'paragraph',
                            text: "Trong Isaia 45:1, Thiên Chúa gọi Cyrus, vua Ba Tư, là \"Đấng được xức dầu\" (Mashiach/Messiah) của Ngài. Đây là lần duy nhất trong Kinh Thánh danh hiệu thiêng liêng này được trao cho một vị vua không phải người Israel [3]."
                        },
                        {
                            type: 'quote',
                            text: "\"Ta cầm lấy tay phải nó, để bắt các dân phục quyền nó... Vì lợi ích của tôi tớ Ta là Gia-cóp, và của Ít-ra-en, kẻ Ta tuyển chọn, Ta đã gọi đích danh ngươi... dù ngươi không biết Ta.\"",
                            source: "Isaia 45:1, 4"
                        },
                        {
                            type: 'paragraph',
                            text: "Thiên Chúa khẳng định Ngài là Đấng trao vương quyền cho Cyrus. Sự trỗi dậy của Đế quốc Ba Tư, sự sụp đổ của Babylon, và chính sách cho phép dân Do Thái hồi hương, tất cả đều nằm trong sự điều khiển của Thiên Chúa. Điều này chứng minh rằng quyền lực chính trị của các dân tộc ngoại không nằm ngoài tầm kiểm soát của Chúa; ngược lại, họ được tích hợp vào kế hoạch cứu độ tổng thể [3]."
                        }
                    ]
                },
                {
                    id: "section-5-2",
                    title: "Nebuchadnezzar - \"Tôi Tớ Của Ta\"",
                    content: [
                        {
                            type: 'paragraph',
                            text: "Tương tự, ngôn sứ Giêrêmia gọi Nebuchadnezzar, vua Babylon – kẻ đã phá hủy Đền Thờ Jerusalem – là \"tôi tớ của Ta\" (Giêrêmia 25:9; 27:6). Thiên Chúa dùng Nebuchadnezzar như một công cụ kỷ luật đối với Israel và các dân tộc xung quanh. Việc gọi một vua ngoại là \"tôi tớ\" (servant) đặt ông ta vào cùng một danh mục chức năng (dù không cùng phẩm chất đạo đức) với Đavít hay Môsê trong việc thực thi ý định của lịch sử [8]."
                        }
                    ]
                }
            ]
        },
        {
            id: "chapter-6",
            title: "Chương 6: Thần Học Hệ Thống Về Sự Quan Phòng (Divine Providence)",
            intro: "Từ các bằng chứng Kinh Thánh trên, các nhà thần học (đặc biệt trong truyền thống Công giáo và Cải cách) đã hệ thống hóa giáo lý về sự quan phòng thành hai phạm trù chính để giải thích cách Thiên Chúa tương tác với nhân loại.",
            sections: [
                {
                    id: "section-6-1",
                    title: "Phân Biệt Quan Phòng Chung và Quan Phòng Đặc Biệt",
                    content: [
                        {
                            type: 'table',
                            headers: ["Đặc Điểm", "Quan Phòng Chung (General Providence)", "Quan Phòng Đặc Biệt (Special Providence)"],
                            rows: [
                                ["Đối Tượng", "Toàn thể nhân loại, mọi tạo vật, vũ trụ tự nhiên. [21]", "Dân Tuyển Chọn (Israel cũ, Hội Thánh mới), các cá nhân được gọi đích danh. [22]"],
                                ["Phạm Vi", "Duy trì sự tồn tại (preservation), quy luật tự nhiên, trật tự xã hội, lương tâm đạo đức (Natural Law). [23]", "Can thiệp siêu nhiên (phép lạ), mặc khải đặc biệt (Kinh Thánh), ân sủng cứu độ trực tiếp. [24]"],
                                ["Mục Đích", "Biểu lộ sự tốt lành của Đấng Tạo Hóa, duy trì sân khấu cho lịch sử cứu độ, hạn chế sự ác. [25]", "Thực hiện kế hoạch cứu độ, thánh hóa, dẫn đưa về sự hiệp thông vĩnh cửu với Thiên Chúa. [26]"],
                                ["Ví Dụ Kinh Thánh", "Mưa nắng cho người công chính và kẻ bất chính (Mt 5:45), sự hưng thịnh của các đế quốc.", "Cuộc Xuất Hành, sự Nhập Thể của Đức Kitô, sự hoán cải của Phaolô."]
                            ]
                        },
                        {
                            type: 'paragraph',
                            text: "Giáo lý Hội Thánh Công Giáo (CCC 302-308) khẳng định rằng Thiên Chúa gìn giữ và điều khiển tất cả những gì Ngài sáng tạo. Không có dân tộc nào nằm ngoài \"tầm mắt\" hay \"bàn tay\" của Ngài. Đối với các dân tộc chưa nhận biết Ngài qua mặc khải Kinh Thánh, Ngài vẫn hiện diện qua sự quan phòng chung, qua tiếng nói lương tâm và qua những hạt giống chân lý (semina verbi) rải rác trong văn hóa của họ [27]."
                        }
                    ]
                },
                {
                    id: "section-6-2",
                    title: "Vấn Đề Về Sự Cứu Độ Của Dân Ngoại (Salvation of the Nations)",
                    content: [
                        {
                            type: 'paragraph',
                            text: "Câu hỏi lớn nhất là: Liệu sự quan phòng chung có dẫn đến sự cứu rỗi không? Thần học Công giáo hiện đại, dựa trên Công đồng Vatican II (Lumen Gentium), dạy rằng những người vô can không biết Tin Mừng nhưng tìm kiếm Thiên Chúa với lòng chân thành (dưới sự tác động của ân sủng mà họ có thể không gọi tên) vẫn có thể được cứu độ. Sự tuyển chọn Israel và Hội Thánh là con đường chính yếu và chắc chắn (the sure way), nhưng không giới hạn quyền năng của Thiên Chúa trong việc cứu độ những người thuộc các dân tộc khác theo những cách thức mà chỉ một mình Ngài biết [28]."
                        },
                        {
                            type: 'paragraph',
                            text: "Khái niệm \"Supersessionism\" (Thuyết thay thế - cho rằng Hội Thánh thay thế hoàn toàn Israel và Israel bị loại bỏ) đã bị bác bỏ bởi nhiều thần học gia đương đại (như Fr. Thomas Joseph White). Thay vào đó, mô hình \"Dual Covenant\" (Giao ước kép) hoặc sự tháp nhập (engrafting) được đề cao, nơi Israel vẫn giữ vai trò đặc biệt trong khi các dân tộc được mời gọi tham dự vào cùng một lời hứa [28]."
                        }
                    ]
                }
            ]
        },
        {
            id: "chapter-7",
            title: "Chương 7: Đền Thờ và Sân Dân Ngoại - Thần Học Về Không Gian Thờ Phượng",
            intro: "Cấu trúc vật lý của Đền Thờ Jerusalem thời Hêrôđê (Second Temple) là một bản đồ thần học sống động về mối quan hệ giữa Israel và các dân tộc.",
            sections: [
                {
                    id: "section-7-1",
                    title: "Sân Dân Ngoại (The Court of the Gentiles)",
                    content: [
                        {
                            type: 'paragraph',
                            text: "Đền Thờ không chỉ có Nơi Cực Thánh. Nó bao gồm một khu vực rộng lớn bao quanh gọi là Sân Dân Ngoại. Đây là không gian được thánh hiến để những người không phải Do Thái (God-fearers) đến cầu nguyện và thờ phượng Thiên Chúa của Israel [29]."
                        },
                        {
                            type: 'paragraph',
                            text: "Sự tồn tại của sân này là một sự thừa nhận chính thức: Dân ngoại có quyền và có nhu cầu tiếp cận Thiên Chúa. Isaia 56:7 tuyên bố: \"Nhà Ta sẽ được gọi là nhà cầu nguyện cho muôn dân.\""
                        },
                        {
                            type: 'paragraph',
                            text: "Tuy nhiên, sự căng thẳng vẫn tồn tại. Có một bức tường thấp (Soreg) với các biển báo bằng tiếng Hy Lạp và Latin cảnh báo bất kỳ người ngoại nào vượt qua ranh giới này vào khu vực bên trong sẽ bị xử tử [31]. Điều này tượng trưng cho sự phân cách của Cựu Ước: Dân ngoại được chào đón đến gần, nhưng chưa được vào trong sự hiệp thông trọn vẹn của Giao Ước."
                        }
                    ]
                },
                {
                    id: "section-7-2",
                    title: "Hành Động Tẩy Uế Đền Thờ Của Đức Giêsu",
                    content: [
                        {
                            type: 'paragraph',
                            text: "Khi Đức Giêsu đánh đuổi những người buôn bán khỏi Đền Thờ, nhiều học giả tin rằng hành động này diễn ra tại Sân Dân Ngoại. Việc biến khu vực cầu nguyện duy nhất của dân ngoại thành nơi buôn bán súc vật đã tước đoạt quyền thờ phượng của họ. Sự phẫn nộ của Chúa Giêsu (\"Các ngươi đã biến nó thành hang trộm cướp\") không chỉ là về sự thương mại hóa, mà còn là sự bảo vệ không gian thiêng liêng dành cho các dân tộc [29]. Ngài đang tái khẳng định quyền của các dân tộc khác trong việc tìm kiếm Thiên Chúa."
                        }
                    ]
                }
            ]
        },
        {
            id: "chapter-8",
            title: "Chương 8: Sự Kiện Toàn Trong Tân Ước: Phá Đổ Bức Tường Ngăn Cách",
            intro: "Tân Ước không hủy bỏ lịch sử bảo vệ Israel của Thiên Chúa, mà mở rộng phạm vi của sự bảo vệ đó ra quy mô toàn cầu thông qua Đức Giêsu Kitô.",
            sections: [
                {
                    id: "section-8-1",
                    title: "Đức Giêsu và Đức Tin Của Dân Ngoại",
                    content: [
                        {
                            type: 'paragraph',
                            text: "Trong sứ vụ của mình, Chúa Giêsu nhiều lần tương tác với dân ngoại (viên đại đội trưởng La Mã, người đàn bà Syro-Phoenicia). Ngài thường khen ngợi đức tin của họ là lớn hơn đức tin Ngài tìm thấy trong Israel (Mát-thêu 8:10)."
                        },
                        {
                            type: 'paragraph',
                            text: "Đáng chú ý, trong bài giảng đầu tiên tại Nazareth (Luca 4), Chúa Giêsu đã chọc giận dân làng khi nhắc lại hai ví dụ lịch sử:"
                        },
                        {
                            type: 'list',
                            items: [
                                "Tiên tri Êlia được sai đến giúp bà góa vùng Sarepta (dân ngoại Sidon), chứ không phải các bà góa Israel.",
                                "Tiên tri Êlisa chữa lành cho Naaman (tướng quân Syria), chứ không phải người phong hủi Israel. [3]"
                            ]
                        },
                        {
                            type: 'paragraph',
                            text: "Chúa Giêsu dùng chính lịch sử Cựu Ước để chứng minh rằng Thiên Chúa luôn có sự tự do để ban ơn sủng và bảo vệ cho các dân tộc khác, đôi khi còn ưu tiên họ hơn cả dân bản địa cứng lòng."
                        }
                    ]
                },
                {
                    id: "section-8-2",
                    title: "Phaolô và Cây Ô-liu (Rôma 9-11)",
                    content: [
                        {
                            type: 'paragraph',
                            text: "Thánh Phaolô cung cấp hình ảnh thần học dứt khoát nhất về vấn đề này. Ngài ví Israel như cây ô-liu được trồng (cây tốt). Các dân tộc khác là những nhánh ô-liu hoang dại."
                        },
                        {
                            type: 'list',
                            items: [
                                "Thiên Chúa không chặt bỏ cây ô-liu Israel để trồng cây mới. Ngài \"tháp nhập\" (graft in) các nhánh hoang dại vào thân cây cũ để chúng được hưởng nhựa sống từ rễ (các Tổ phụ Abraham, Isaac, Giacóp). [33]",
                                "Sự bảo vệ Israel vẫn tiếp tục (\"toàn thể Israel sẽ được cứu\" - Rôma 11:26), nhưng giờ đây khái niệm \"Dân Chúa\" được mở rộng bao gồm cả những người ngoại bang tin nhận Đức Kitô. Bức tường ngăn cách tại Đền Thờ đã bị phá đổ về mặt thiêng liêng (Êphêsô 2:14). [7]"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: "conclusion",
            title: "Kết Luận Tổng Hợp",
            intro: "Để trả lời trọn vẹn câu hỏi: \"Thiên Chúa luôn gìn giữ và bảo vệ dân Israel, còn các dân khác thì sao?\", chúng ta có thể đúc kết lại thành một luận đề thần học toàn diện như sau:",
            sections: [
                {
                    id: "section-conclusion",
                    title: "",
                    content: [
                        {
                            type: 'list',
                            items: [
                                "Sự bảo vệ Israel mang tính chiến lược: Thiên Chúa gìn giữ Israel không phải vì Ngài chỉ yêu một mình họ, mà vì Israel là \"phương tiện\" (vehicle) không thể thay thế để mang sự cứu rỗi đến cho thế giới. Israel là \"con đầu lòng\" (Exodus 4:22), và vai trò của con trưởng là giúp cha chăm sóc các em, chứ không phải độc chiếm tình thương của cha.",
                                "Sự quan phòng đối với các dân tộc là hiện thực và liên tục: Các dân tộc khác không bao giờ bị bỏ rơi. Họ sống dưới Giao ước Noah, được hướng dẫn bởi Luật Tự Nhiên, được nuôi dưỡng bởi sự quan phòng chung, và được can thiệp bởi quyền tể trị của Thiên Chúa trong lịch sử (như trường hợp người Philitinh, Aram, Ba Tư). Thậm chí, họ còn được ban cho những ngôn sứ và tư tế riêng (Melchizedek, Balaam, Gióp) như những nhân chứng của Thiên Chúa giữa lòng họ.",
                                "Sự hội tụ cuối cùng: Kế hoạch của Thiên Chúa là di chuyển từ \"Một\" (Abraham) đến \"Tất Cả\" (Muôn dân). Lịch sử cứu độ bắt đầu bằng sự tách biệt (chọn riêng Israel) nhưng kết thúc bằng sự hiệp nhất. Sách Khải Huyền 7:9 vẽ nên bức tranh cuối cùng: \"Một đoàn người đông không thể đếm được, thuộc mọi dân, mọi nước, mọi chi tộc, mọi ngôn ngữ\" đứng trước ngai Thiên Chúa. Tại đó, sự phân biệt giữa \"Israel được bảo vệ\" và \"các dân tộc bị bỏ rơi\" hoàn toàn biến mất; chỉ còn lại một nhân loại mới được cứu chuộc trong ân sủng."
                            ]
                        },
                        {
                            type: 'paragraph',
                            text: "Như vậy, công lý và tình yêu của Thiên Chúa không hề mâu thuẫn. Sự tuyển chọn đặc biệt dành cho Israel chính là hình thức cao nhất của tình yêu Ngài dành cho các dân tộc khác, vì từ Israel, Đấng Cứu Thế của muôn dân đã ra đời."
                        }
                    ]
                }
            ]
        }
    ],
    references: [
        { id: 1, text: "Holy Joys. (2023). Election in the Old Testament. Retrieved February 6, 2026, from https://holyjoys.org/election-in-the-old-testament/" },
        { id: 2, text: "House of David Ministries. (2017). Israel—A Covenant to the People and a Light to the Nations. Retrieved February 6, 2026, from https://www.thehouseofdavid.org" },
        { id: 3, text: "Kaminsky, J. S. (2014). Election in the Hebrew Bible. Bible Interp. Retrieved from https://bibleinterp.arizona.edu/" },
        { id: 5, text: "Brueggemann, W. (2021). The God of the Other: Amos 9:7. Church Anew. Retrieved from https://churchanew.org/" },
        { id: 6, text: "Wright, C. J. H. (2010). The Mission of God's People in the Old Testament. Andrews University Digital Commons." },
        { id: 7, text: "Jackson, W. (n.d.). Did the Ancient Gentiles Have the Hope of Salvation? Christian Courier. Retrieved from https://christiancourier.com" },
        { id: 8, text: "Congregation Shema Yisrael. (n.d.). Gentiles and Jews, God and Jonah. Retrieved from https://shema.com" },
        { id: 9, text: "DeYoung, K. (2018). Who Is Melchizedek? The Gospel Coalition. Retrieved from https://www.thegospelcoalition.org" },
        { id: 10, text: "Wikipedia Contributors. (2025). Priesthood of Melchizedek. In Wikipedia, The Free Encyclopedia." },
        { id: 11, text: "Giáo xứ Vinh Sơn Bình Dương. (n.d.). Chương 7: Thư Gửi Tín Hữu Hipri. Retrieved from https://giaoxuvinhson.info" },
        { id: 12, text: "Stack Exchange Contributors. (2015). Melchizedek: He was a priest of the Most High? Hermeneutics Stack Exchange." },
        { id: 14, text: "Asbury Theological Seminary. (n.d.). A Prophet Unlike Moses: Balaam as Prophetic Intercessor. The Asbury Journal." },
        { id: 16, text: "BYU Religious Studies Center. (n.d.). Balaam in the Book of Numbers. Retrieved from https://rsc.byu.edu" },
        { id: 17, text: "Congregation Shema Yisrael. (n.d.). Gentiles and Jews, God and Jonah. Retrieved from https://shema.com" },
        { id: 18, text: "Ligonier Ministries. (n.d.). Egypt and Assyria Serve the Lord. Retrieved from https://learn.ligonier.org" },
        { id: 21, text: "Catholicism.org. (n.d.). Divine Providence: A Doctrinal Overview. Retrieved from https://catholicism.org" },
        { id: 22, text: "Text & Canon Institute. (n.d.). Providence and Preservation. Retrieved from https://textandcanon.org" },
        { id: 23, text: "Wikipedia Contributors. (2025). Divine providence. In Wikipedia, The Free Encyclopedia." },
        { id: 24, text: "Catholic Stand. (2019). Catholic Teaching on Divine Providence. Retrieved from https://catholicstand.com" },
        { id: 25, text: "EWTN. (n.d.). Providence. Retrieved from https://www.ewtn.com" },
        { id: 26, text: "Giáo phận Lạng Sơn. (2019). Thiên Chúa quan phòng và tự do con người. Retrieved from https://giaophanlangson.net" },
        { id: 27, text: "Catholic World Report. (2025). The Catholic Church and Israel: Perspective and Insights from a Dominican Theologian. Retrieved from https://www.catholicworldreport.com" },
        { id: 28, text: "Catholic World Report. (2025). The Catholic Church and Israel: Perspective and Insights from a Dominican Theologian. Retrieved from https://www.catholicworldreport.com" },
        { id: 29, text: "Bible Hub. (n.d.). Topical Bible: Court of the Gentiles. Retrieved from https://biblehub.com" },
        { id: 31, text: "Wisdom Lib. (n.d.). Meaning of Court of the Gentiles in Christianity. Retrieved from https://www.wisdomlib.org" },
        { id: 33, text: "GotQuestions.org. (n.d.). What does it mean that Israel is a light to the Gentiles? Retrieved from https://www.gotquestions.org" }
    ]
};
