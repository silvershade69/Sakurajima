Search.setIndex({docnames:["index","models/anime","models/aniwatch_episode","models/aniwatch_stats","models/chronicle_entry","models/episode","models/friend","models/friend_request_incoming","models/friend_request_outgoing","models/media","models/media_entry","models/models","models/notification","models/recommendation_entry","models/relation","models/relation_entry","models/user_anime_list_entry","models/user_overview","models/user_overview_stats","models/user_overview_watch_type","sakurajima","utils/downloaders","utils/episode_list","utils/mergers","utils/utils"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":1,sphinx:56},filenames:["index.rst","models\\anime.rst","models\\aniwatch_episode.rst","models\\aniwatch_stats.rst","models\\chronicle_entry.rst","models\\episode.rst","models\\friend.rst","models\\friend_request_incoming.rst","models\\friend_request_outgoing.rst","models\\media.rst","models\\media_entry.rst","models\\models.rst","models\\notification.rst","models\\recommendation_entry.rst","models\\relation.rst","models\\relation_entry.rst","models\\user_anime_list_entry.rst","models\\user_overview.rst","models\\user_overview_stats.rst","models\\user_overview_watch_type.rst","sakurajima.rst","utils\\downloaders.rst","utils\\episode_list.rst","utils\\mergers.rst","utils\\utils.rst"],objects:{"Sakurajima.api":{Sakurajima:[20,1,1,""]},"Sakurajima.api.Sakurajima":{add_recommendation:[20,2,1,""],delete_all_notifications:[20,2,1,""],delete_notification:[20,2,1,""],favorite_media:[20,2,1,""],from_cookie:[20,2,1,""],get_airing_anime:[20,2,1,""],get_anime:[20,2,1,""],get_anime_chronicle:[20,2,1,""],get_best_rated_anime:[20,2,1,""],get_episode:[20,2,1,""],get_episodes:[20,2,1,""],get_latest_anime:[20,2,1,""],get_latest_releases:[20,2,1,""],get_latest_uploads:[20,2,1,""],get_media:[20,2,1,""],get_notifications:[20,2,1,""],get_popular_anime:[20,2,1,""],get_popular_seasonal_anime:[20,2,1,""],get_popular_upcoming_anime:[20,2,1,""],get_random_anime:[20,2,1,""],get_recommendations:[20,2,1,""],get_relation:[20,2,1,""],get_seasonal_anime:[20,2,1,""],get_stats:[20,2,1,""],get_unread_notifications:[20,2,1,""],get_user_anime_list:[20,2,1,""],get_user_chronicle:[20,2,1,""],get_user_media:[20,2,1,""],get_user_overview:[20,2,1,""],get_watchlist:[20,2,1,""],mark_all_notifications_as_read:[20,2,1,""],mark_as_completed:[20,2,1,""],mark_as_dropped:[20,2,1,""],mark_as_on_hold:[20,2,1,""],mark_as_plan_to_watch:[20,2,1,""],mark_as_watching:[20,2,1,""],rateAnime:[20,2,1,""],remove_chronicle_entry:[20,2,1,""],remove_from_list:[20,2,1,""],report_missing_anime:[20,2,1,""],report_missing_streams:[20,2,1,""],search:[20,2,1,""],toggle_mark_as_watched:[20,2,1,""],toggle_notification_seen:[20,2,1,""],using_proxy:[20,2,1,""]},"Sakurajima.models":{base_models:[2,0,0,"-"],chronicle:[4,0,0,"-"],media:[10,0,0,"-"],notification:[12,0,0,"-"],recommendation:[13,0,0,"-"],relation:[15,0,0,"-"],stats:[3,0,0,"-"],user_models:[19,0,0,"-"]},"Sakurajima.models.base_models":{AniWatchEpisode:[2,1,1,""],Anime:[1,1,1,""],Episode:[5,1,1,""]},"Sakurajima.models.base_models.AniWatchEpisode":{episode_id:[2,3,1,""],languages:[2,3,1,""],stream:[2,3,1,""]},"Sakurajima.models.base_models.Anime":{add_recommendation:[1,2,1,""],get_chronicle:[1,2,1,""],get_complete_object:[1,2,1,""],get_dict:[1,2,1,""],get_episodes:[1,2,1,""],get_media:[1,2,1,""],get_recommendations:[1,2,1,""],get_relations:[1,2,1,""],mark_as_completed:[1,2,1,""],mark_as_dropped:[1,2,1,""],mark_as_on_hold:[1,2,1,""],mark_as_plan_to_watch:[1,2,1,""],mark_as_watching:[1,2,1,""],rate:[1,2,1,""],remove_from_list:[1,2,1,""]},"Sakurajima.models.base_models.Episode":{added:[5,3,1,""],anime_id:[5,3,1,""],anime_title:[5,3,1,""],description:[5,3,1,""],download:[5,2,1,""],duration:[5,3,1,""],ep_id:[5,3,1,""],filler:[5,3,1,""],get_aniwatch_episode:[5,2,1,""],get_available_qualities:[5,2,1,""],get_m3u8:[5,2,1,""],is_aired:[5,3,1,""],lang:[5,3,1,""],number:[5,3,1,""],thumbnail:[5,3,1,""],title:[5,3,1,""],toggle_mark_as_watched:[5,2,1,""],watched:[5,3,1,""]},"Sakurajima.models.chronicle":{ChronicleEntry:[4,1,1,""]},"Sakurajima.models.chronicle.ChronicleEntry":{anime_id:[4,3,1,""],anime_title:[4,3,1,""],chronicle_id:[4,3,1,""],date:[4,3,1,""],ep_title:[4,3,1,""],episode:[4,3,1,""],remove_chronicle_entry:[4,2,1,""]},"Sakurajima.models.media":{Media:[9,1,1,""],MediaEntry:[10,1,1,""]},"Sakurajima.models.media.Media":{anime_id:[9,3,1,""],endings:[9,3,1,""],openings:[9,3,1,""],osts:[9,3,1,""],theme_songs:[9,3,1,""]},"Sakurajima.models.media.MediaEntry":{favorite_media:[10,2,1,""],favorites:[10,3,1,""],id:[10,3,1,""],is_favorited:[10,3,1,""],thumbnail:[10,3,1,""],title:[10,3,1,""],type:[10,3,1,""]},"Sakurajima.models.notification":{Notification:[12,1,1,""]},"Sakurajima.models.notification.Notification":{"delete":[12,2,1,""],content:[12,3,1,""],href:[12,3,1,""],href_blank:[12,3,1,""],id:[12,3,1,""],seen:[12,3,1,""],time:[12,3,1,""],toggle_seen:[12,2,1,""],type:[12,3,1,""]},"Sakurajima.models.recommendation":{RecommendationEntry:[13,1,1,""]},"Sakurajima.models.recommendation.RecommendationEntry":{airing_start:[13,3,1,""],anime_id:[13,3,1,""],cover:[13,3,1,""],cur_episodes:[13,3,1,""],d_status:[13,3,1,""],episodes_max:[13,3,1,""],get_anime:[13,2,1,""],has_special:[13,3,1,""],progress:[13,3,1,""],recommendations:[13,3,1,""],title:[13,3,1,""],type:[13,3,1,""]},"Sakurajima.models.relation":{Relation:[14,1,1,""],RelationEntry:[15,1,1,""]},"Sakurajima.models.relation.Relation":{description:[14,3,1,""],entries:[14,3,1,""],relation_id:[14,3,1,""],title:[14,3,1,""]},"Sakurajima.models.relation.RelationEntry":{airing_start:[15,3,1,""],anime_id:[15,3,1,""],completed:[15,3,1,""],cover:[15,3,1,""],cur_episodes:[15,3,1,""],episodes_max:[15,3,1,""],has_nudity:[15,3,1,""],progress:[15,3,1,""],title:[15,3,1,""],type:[15,3,1,""]},"Sakurajima.models.stats":{AniwatchStats:[3,1,1,""]},"Sakurajima.models.stats.AniwatchStats":{new_registered_users:[3,3,1,""],new_registered_users_graph_data:[3,3,1,""],registered_users:[3,3,1,""],registered_users_graph_data:[3,3,1,""],total_1080p_streams:[3,3,1,""],total_360p_streams:[3,3,1,""],total_480p_streams:[3,3,1,""],total_720p_streams:[3,3,1,""],total_animes:[3,3,1,""],total_hentais:[3,3,1,""],total_movies:[3,3,1,""],total_shows:[3,3,1,""],total_specials:[3,3,1,""],total_streams:[3,3,1,""],total_unknowns:[3,3,1,""]},"Sakurajima.models.user_models":{Friend:[6,1,1,""],FriendRequestIncoming:[7,1,1,""],FriendRequestOutgoing:[8,1,1,""],UserAnimeListEntry:[16,1,1,""],UserOverview:[17,1,1,""],UserOverviewStats:[18,1,1,""],UserOverviewWatchType:[19,1,1,""]},"Sakurajima.models.user_models.Friend":{get_chronicle:[6,2,1,""],get_overview:[6,2,1,""],unfriend:[6,2,1,""]},"Sakurajima.models.user_models.FriendRequestIncoming":{accept:[7,2,1,""],decline:[7,2,1,""]},"Sakurajima.models.user_models.FriendRequestOutgoing":{withdraw:[8,2,1,""]},"Sakurajima.models.user_models.UserAnimeListEntry":{airing_start:[16,3,1,""],anime_id:[16,3,1,""],cover:[16,3,1,""],cur_episodes:[16,3,1,""],episodes_max:[16,3,1,""],get_anime:[16,2,1,""],progress:[16,3,1,""],status:[16,3,1,""],title:[16,3,1,""],type:[16,3,1,""]},"Sakurajima.models.user_models.UserOverview":{admin:[17,3,1,""],anime:[17,3,1,""],cover:[17,3,1,""],friend:[17,3,1,""],hentai:[17,3,1,""],movie:[17,3,1,""],special:[17,3,1,""],staff:[17,3,1,""],stats:[17,3,1,""],title:[17,3,1,""],username:[17,3,1,""]},"Sakurajima.models.user_models.UserOverviewStats":{mean_score:[18,3,1,""],ratings:[18,3,1,""],total:[18,3,1,""],total_episodes:[18,3,1,""],watched_days:[18,3,1,""],watched_hours:[18,3,1,""]},"Sakurajima.models.user_models.UserOverviewWatchType":{episodes:[19,3,1,""],total:[19,3,1,""]},"Sakurajima.utils":{downloader:[21,0,0,"-"],episode_list:[22,0,0,"-"],merger:[23,0,0,"-"]},"Sakurajima.utils.downloader":{ChunkDownloader:[21,1,1,""],MultiThreadDownloader:[21,1,1,""]},"Sakurajima.utils.downloader.ChunkDownloader":{download:[21,2,1,""]},"Sakurajima.utils.downloader.MultiThreadDownloader":{download:[21,2,1,""],merge:[21,2,1,""],remove_chunks:[21,2,1,""]},"Sakurajima.utils.episode_list":{EpisodeList:[22,1,1,""]},"Sakurajima.utils.episode_list.EpisodeList":{get_episode_by_number:[22,2,1,""],get_episode_by_title:[22,2,1,""],last:[22,2,1,""]},"Sakurajima.utils.merger":{ChunkMerger:[23,1,1,""],FFmpegMerger:[23,1,1,""]},"Sakurajima.utils.merger.ChunkMerger":{merge:[23,2,1,""]},"Sakurajima.utils.merger.FFmpegMerger":{merge:[23,2,1,""]},Sakurajima:{api:[20,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","attribute","Python attribute"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute"},terms:{"1080p":[3,5],"360p":[3,5],"480p":[3,5],"720p":[3,5],"case":1,"class":[1,2,3,4,5,6,7,8,9,10,12,13,14,15,16,17,18,19,20,21,22,23],"default":[1,5,6,20],"function":[5,20],"int":[1,5,6,20,21,22],"new":5,"null":20,"return":[1,4,5,6,7,8,10,12,13,16,20,22],"true":[1,4,5,6,7,8,10,12,21],For:[5,13,15,16,20],The:[1,2,3,4,5,6,9,10,12,13,14,15,16,17,18,19,20,21,22],Use:1,Used:5,Using:5,abil:20,accept:7,access:[1,5,20],accord:20,account:[12,20],actual:21,add:1,add_recommend:[1,20],added:5,addit:[1,20],admin:17,administr:17,affect:5,after:5,air:[1,5,12,13,15,16,20],airing_start:[13,15,16],ajax:20,all:[1,3,5,10,18,20],almost:1,alreadi:16,also:[5,20],altern:20,amount:1,ani:3,anim:[0,3,4,5,9,11,12,13,15,16,17,18,20],anime_id:[1,4,5,9,13,15,16,20],anime_nam:[5,20],anime_titl:[4,5],anititl:5,aniwatch:[1,3,5,6,16,17,20,21],aniwatchepisod:[0,5,11,20],aniwatchstat:[0,11,20],annd:18,api:[1,5,20],api_url:[1,4,5],apihandl:20,argument:5,around:20,arrang:20,associ:[1,2,5,12],attribu:22,attribut:1,auth:20,authtoken:20,automat:20,avail:[1,2,5,20],backend:1,base_model:[1,2,5],becaus:5,been:5,belon:9,belong:[2,5,19,20],benefit:5,between:1,bodi:12,bool:[1,4,5,6,7,8,10,12,20,21],breif:[],brief:20,call:[1,5],can:[1,5,15,16,20,22],categori:[3,9,18],caus:5,certain:5,chart:20,check:20,checkout:20,choos:20,chronicl:[1,4,6,20],chronicle_id:[4,20],chronicleentri:[0,1,6,11,20],chunk:[5,21,23],chunkdownload:21,chunkmerg:23,classmethod:20,cober:17,com:[],combin:5,come:5,complet:[1,15,20],concatin:23,configur:20,connect:5,consol:5,constructor:20,contain:[1,9,10,20],content:[0,12,20],convini:[1,22],cooki:20,cookie_fil:20,core:20,correspond:20,cover:[13,15,16,17],creat:[4,23],cur_episod:[13,15,16],current:[1,5,13,20],d_statu:13,dai:18,data:[1,3,5,6,10,18,19,20],data_dict:[1,2,3,4,5,6,7,8,9,10,12,13,14,15,16,17,18,19],date:[1,4,5,20],declin:7,delet:[5,12,20,21],delete_all_notif:20,delete_chunk:[5,21],delete_notif:20,descript:[1,5,14,20],detail:[1,20],detail_id:1,dict:[1,20],dictionari:[1,20],differ:[18,22],directori:5,disabl:5,doc:[],document:20,doe:[1,20],don:3,done:5,dowload:5,download:[0,5,20,23,24],drop:[1,20],durat:5,each:[1,20],easier:22,edg:1,els:5,enabl:5,end:[9,10,20],endpoint:20,english:20,engsub:[],entri:[4,9,10,14,16,20],ep_id:5,ep_titl:4,epiosod:15,episod:[0,1,2,4,11,12,13,15,16,18,19,20,21,22],episode_id:[2,20,21],episode_list:22,episode_numb:[1,5,22],episodelist:[0,1,20,24],episodes_max:[13,15,16],eptitl:5,error:[1,4,5,6,7,8,10,12],especi:5,etc:[1,6,10,16,17,18,20],everi:5,everyth:22,exact:5,exampl:[5,10,12,13,15,16],extract:20,facilit:21,fall:3,fals:[1,4,5,6,7,8,10,12,20,21],faster:5,favorit:[10,20],favorite_media:[10,20],feasibl:5,few:1,ffmpeg:[5,23],ffmpegmerg:23,figur:13,file:[5,20,21,23],file_nam:[5,21,23],filler:5,find:22,first:22,form:1,friend:[0,7,8,11,17],friendrequestincom:[0,11],friendrequestoutgo:[0,11],from:[1,4,6,12,18,20,21,22],from_cooki:20,fullhd:5,further:20,gener:[4,19],get:[1,5,6,13,16,20],get_airing_anim:20,get_anim:[13,16,20],get_anime_chronicl:20,get_aniwatch_episod:5,get_available_qu:5,get_best_rated_anim:20,get_chronicl:[1,6],get_complete_object:1,get_dict:1,get_episod:[1,20],get_episode_by_numb:[1,22],get_episode_by_titl:22,get_latest_anim:20,get_latest_releas:20,get_latest_upload:20,get_m3u8:5,get_media:[1,20],get_notif:20,get_overview:6,get_popular_anim:20,get_popular_seasonal_anim:20,get_popular_upcoming_anim:20,get_random_anim:20,get_recommend:[1,20],get_rel:[1,20],get_seasonal_anim:20,get_stat:20,get_unread_notif:20,get_user_anime_list:20,get_user_chronicl:20,get_user_media:20,get_user_overview:20,get_watchlist:20,github:[],given:[18,20],graph:3,has:[1,5,6,7,8,10,12,13,15,16,17,18,20,22],has_nud:15,has_speci:13,have:[3,5,10,13,15,16,20],hentai:[3,17],highest:20,histori:[1,4,6,20],hold:[1,18,19,20],hour:[17,18,20],how:20,howev:[5,20],href:12,href_blank:12,http:20,imag:[13,16,17],includ:[5,17,18,20],include_intro:[5,21],index:[0,1,20],inform:20,initi:[1,20],inord:20,instruct:20,intro:5,is_air:5,is_favorit:10,issu:[5,12,13],item:20,its:20,join:3,json:1,keep:5,kei:20,know:13,lamguag:20,lang:[5,20],languag:[2,5,20],last:22,latest:20,left:5,let:[5,13],librari:20,like:[1,6,9,10,17,18,20],list:[1,2,5,6,16,20,22],live:5,m3u8:[5,21],macro:5,mai:5,make:22,mani:1,mark:[1,5,10,20],mark_all_notifications_as_read:20,mark_as_complet:[1,20],mark_as_drop:[1,20],mark_as_on_hold:[1,20],mark_as_plan_to_watch:[1,20],mark_as_watch:[1,20],match:22,max_thread:[5,21],maximum:[1,5],mayb:4,mean:[6,18],mean_scor:18,media:[0,1,10,11,20],media_id:[10,20],mediaentri:[0,11,20],merg:[21,23],merger:[0,24],method:[1,5,22],miss:20,model:[0,1,2,3,4,5,6,7,8,9,10,12,13,14,15,16,17,18,19],modul:0,more:4,movi:[3,13,15,16,17,18,20],mp4:[5,23],multi:5,multi_thread:5,multipl:21,multithread:5,multithreaddownload:21,name:[5,20],neccasari:20,need:5,neg:5,network:[1,4,5,6,7,8,9,10,12,13,16,21],never:1,new_registered_us:3,new_registered_users_graph_data:3,none:[5,20,21],normal:[1,20,22],note:5,notic:5,notif:[0,11,20],notification_id:20,notificaton:20,nottif:12,nuditi:15,number:[1,3,4,5,10,13,15,16,17,18,19,20,22],object:[1,2,4,5,6,13,16,17,20,21,22],objetc:20,occur:[1,4,5,6,7,8,10,12],off:5,offer:5,offici:9,on_progress:5,onc:5,one:5,onli:[5,22],open:[1,9,10,13,20],oper:[1,4,5,6,7,8,10,12],option:[1,5,6,20],order:5,ost:[1,9,20],our:13,out:[13,20],overview:[6,17,20],page:[0,1,6,20],param:20,paramet:[1,5,6,20,22],particul:19,particular:[1,19,20,22],pass:5,path:5,per:5,perform:5,plan:[1,20],playback:5,player:5,pleas:13,popular:20,possibl:1,prefer:20,print:5,print_progress:5,profil:[6,17],progress:[13,15,16,20],properti:[5,20],provid:[1,20],proxi:20,proxy_fil:20,qualiti:[5,20],queri:20,question:5,random:20,rate:[1,18,20],rateanim:20,read:20,reccomend:1,reccomendationentri:20,recent:[3,12],reciev:7,recommen:13,recommend:[1,5,13,15,20],recommendationentri:[0,1,11,20],recommended_anime_id:[1,20],recommened:13,refer:5,regard:[5,6,18,19,20],regist:[3,5],registered_us:3,registered_users_graph_data:3,relat:[0,1,4,10,11,15,20],relation_id:[14,20],relationentri:[0,11],releas:20,relev:[1,10,20],remov:[1,4,6,20],remove_chronicle_entri:[4,20],remove_chunk:21,remove_from_list:[1,20],replac:5,repo:13,report:20,report_missing_anim:20,report_missing_stream:20,repres:[1,4,6,7,8,10,16,17,20],request:[7,8],requir:[1,5,20],respect:[5,20],respons:1,result:5,resumabilti:5,run:21,saga:5,sai:5,sakurajim:20,sakurajima:[1,2,3,4,5,6,7,8,9,10,12,13,14,15,16,17,18,19,21,22,23],same:20,score:[6,18,20],script:5,search:[0,20],season:[13,15,16,20],second:5,seen:[12,20],segment:21,select:[5,22],sent:8,seri:4,set:[1,5,20],should:1,show:[3,6,16,17,18,19],signific:5,similar:[1,20,22],singl:[1,4,5,10,16,20,21,23],site:20,skip:5,slower:5,smaller:5,some:[20,22],sometim:1,song:9,sound:9,special:[3,13,15,16,17,18,20],specif:[1,4,20],staff:17,star:20,start:[13,15,16,20,21,23],stat:[3,17,18,20],statist:20,statu:[5,10,12,15,16,20],store:20,str:[1,5,20,21,22],stream:[2,3,5,20],strean:20,string:5,sub:20,submit:20,success:[1,4,5,6,7,8,10,12],sum:3,support:5,suppos:5,synonym:20,syntax:1,taken:5,target:20,thei:5,them:23,theme:9,theme_song:9,therefor:5,thi:[1,3,5,12,13,16,17,18,20],thing:[6,17,20],third:5,those:20,thread:[5,21],thumbnail:[5,10],time:[5,6,12,18,20],titl:[1,4,5,10,13,14,15,16,17,20,22],toggl:[5,12,20],toggle_mark_as_watch:[5,20],toggle_notification_seen:20,toggle_seen:12,token:20,too:20,total:[3,5,6,13,15,16,17,18,19,20],total_1080p_stream:3,total_360p_stream:3,total_480p_stream:3,total_720p_stream:3,total_anim:3,total_chunk:23,total_episod:18,total_hentai:3,total_movi:3,total_show:3,total_speci:3,total_stream:3,total_unknown:3,track:[1,4,6,9,20],trade:5,troll:5,type:[1,4,5,6,7,8,10,12,13,15,16,17,19,20,22],unfriend:6,unread:20,upload:20,url:[5,10,12,13,15,16,17],use:20,use_ffmpeg:[5,21],used:[1,5,20],user:[1,3,4,5,6,7,8,10,12,13,15,16,17,18,20],user_id:20,user_model:[6,7,8,16,17,18,19],user_overview:6,useranimelistentri:[0,11,20],userid:20,usermedia:20,usernam:[17,20],useroverview:[0,6,11,20],useroverviewstat:[0,11,17],useroverviewwatchtyp:[0,11,17],using:[1,5,21,23],using_proxi:20,util:[0,21,22,23],valu:[1,20],veri:[1,20,22],veselysp:[],video:[5,21],vinland:5,wai:20,want:[1,5,6,20,22],watch:[1,4,5,6,15,16,17,18,19,20],watched_dai:18,watched_hour:18,watchlist:20,weekdai:20,when:[5,13,15],where:[1,5,20],which:[1,2,9,20],who:[3,10],whose:[5,20,22],wiki:20,withdraw:8,work:5,would:20,wrap:[1,20],wrapper:20,year:20,yet:20,you:[1,5,6,13,20,22],your:[5,20],zero:20},titles:["Welcome to Sakurajima\u2019s documentation!","Anime","AniWatchEpisode","AniwatchStats","ChronicleEntry","Episode","Friend","FriendRequestIncoming","FriendRequestOutgoing","Media","MediaEntry","Models","Notification","RecommendationEntry","Relation","RelationEntry","UserAnimeListEntry","UserOverview","UserOverviewStats","UserOverviewWatchType","Sakurajima","Downloaders","EpisodeList","Mergers","Utils"],titleterms:{anim:1,aniwatchepisod:2,aniwatchstat:3,chronicleentri:4,document:0,download:21,episod:5,episodelist:22,friend:6,friendrequestincom:7,friendrequestoutgo:8,indic:0,media:9,mediaentri:10,merger:23,model:11,notif:12,recommendationentri:13,relat:14,relationentri:15,sakurajima:[0,20],tabl:0,useranimelistentri:16,useroverview:17,useroverviewstat:18,useroverviewwatchtyp:19,util:24,welcom:0}})