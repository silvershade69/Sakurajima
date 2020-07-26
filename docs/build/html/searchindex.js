Search.setIndex({docnames:["index","models/anime","models/aniwatch_episode","models/aniwatch_stats","models/chronicle_entry","models/episode","models/friend","models/media","models/media_entry","models/models","models/notification","models/recommendation_entry","models/relation","models/relation_entry","models/user_anime_list_entry","models/user_overview","models/user_overview_stats","models/user_overview_watch_type","sakurajima"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":1,sphinx:56},filenames:["index.rst","models\\anime.rst","models\\aniwatch_episode.rst","models\\aniwatch_stats.rst","models\\chronicle_entry.rst","models\\episode.rst","models\\friend.rst","models\\media.rst","models\\media_entry.rst","models\\models.rst","models\\notification.rst","models\\recommendation_entry.rst","models\\relation.rst","models\\relation_entry.rst","models\\user_anime_list_entry.rst","models\\user_overview.rst","models\\user_overview_stats.rst","models\\user_overview_watch_type.rst","sakurajima.rst"],objects:{"Sakurajima.api":{Sakurajima:[18,1,1,""]},"Sakurajima.api.Sakurajima":{add_recommendation:[18,2,1,""],delete_all_notifications:[18,2,1,""],delete_notification:[18,2,1,""],favorite_media:[18,2,1,""],get_airing_anime:[18,2,1,""],get_anime:[18,2,1,""],get_anime_chronicle:[18,2,1,""],get_best_rated_anime:[18,2,1,""],get_episode:[18,2,1,""],get_episodes:[18,2,1,""],get_latest_anime:[18,2,1,""],get_latest_releases:[18,2,1,""],get_latest_uploads:[18,2,1,""],get_media:[18,2,1,""],get_notifications:[18,2,1,""],get_popular_anime:[18,2,1,""],get_popular_seasonal_anime:[18,2,1,""],get_popular_upcoming_anime:[18,2,1,""],get_random_anime:[18,2,1,""],get_recommendations:[18,2,1,""],get_relation:[18,2,1,""],get_seasonal_anime:[18,2,1,""],get_stats:[18,2,1,""],get_unread_notifications:[18,2,1,""],get_user_anime_list:[18,2,1,""],get_user_chronicle:[18,2,1,""],get_user_media:[18,2,1,""],get_user_overview:[18,2,1,""],get_watchlist:[18,2,1,""],mark_all_notifications_as_read:[18,2,1,""],mark_as_completed:[18,2,1,""],mark_as_dropped:[18,2,1,""],mark_as_on_hold:[18,2,1,""],mark_as_plan_to_watch:[18,2,1,""],mark_as_watching:[18,2,1,""],rateAnime:[18,2,1,""],remove_chronicle_entry:[18,2,1,""],remove_from_list:[18,2,1,""],report_missing_anime:[18,2,1,""],report_missing_streams:[18,2,1,""],search:[18,2,1,""],toggle_mark_as_watched:[18,2,1,""],toggle_notification_seen:[18,2,1,""],using_proxy:[18,2,1,""]},"Sakurajima.models":{base_models:[2,0,0,"-"],chronicle:[4,0,0,"-"],media:[8,0,0,"-"],notification:[10,0,0,"-"],recommendation:[11,0,0,"-"],relation:[13,0,0,"-"],stats:[3,0,0,"-"],user_models:[17,0,0,"-"]},"Sakurajima.models.base_models":{AniWatchEpisode:[2,1,1,""],Anime:[1,1,1,""],Episode:[5,1,1,""]},"Sakurajima.models.base_models.AniWatchEpisode":{episode_id:[2,3,1,""],languages:[2,3,1,""],stream:[2,3,1,""]},"Sakurajima.models.base_models.Anime":{add_recommendation:[1,2,1,""],get_chronicle:[1,2,1,""],get_complete_object:[1,2,1,""],get_dict:[1,2,1,""],get_episodes:[1,2,1,""],get_media:[1,2,1,""],get_recommendations:[1,2,1,""],get_relations:[1,2,1,""],mark_as_completed:[1,2,1,""],mark_as_dropped:[1,2,1,""],mark_as_on_hold:[1,2,1,""],mark_as_plan_to_watch:[1,2,1,""],mark_as_watching:[1,2,1,""],rate:[1,2,1,""],remove_from_list:[1,2,1,""]},"Sakurajima.models.base_models.Episode":{added:[5,3,1,""],anime_id:[5,3,1,""],anime_title:[5,3,1,""],description:[5,3,1,""],download:[5,2,1,""],duration:[5,3,1,""],ep_id:[5,3,1,""],filler:[5,3,1,""],get_aniwatch_episode:[5,2,1,""],get_available_qualities:[5,2,1,""],get_m3u8:[5,2,1,""],is_aired:[5,3,1,""],lang:[5,3,1,""],number:[5,3,1,""],thumbnail:[5,3,1,""],title:[5,3,1,""],toggle_mark_as_watched:[5,2,1,""],watched:[5,3,1,""]},"Sakurajima.models.chronicle":{ChronicleEntry:[4,1,1,""]},"Sakurajima.models.chronicle.ChronicleEntry":{anime_id:[4,3,1,""],anime_title:[4,3,1,""],chronicle_id:[4,3,1,""],date:[4,3,1,""],ep_title:[4,3,1,""],episode:[4,3,1,""],remove_chronicle_entry:[4,2,1,""]},"Sakurajima.models.media":{Media:[7,1,1,""],MediaEntry:[8,1,1,""]},"Sakurajima.models.media.Media":{anime_id:[7,3,1,""],endings:[7,3,1,""],openings:[7,3,1,""],osts:[7,3,1,""],theme_songs:[7,3,1,""]},"Sakurajima.models.media.MediaEntry":{favorite_media:[8,2,1,""],favorites:[8,3,1,""],id:[8,3,1,""],is_favorited:[8,3,1,""],thumbnail:[8,3,1,""],title:[8,3,1,""],type:[8,3,1,""]},"Sakurajima.models.notification":{Notification:[10,1,1,""]},"Sakurajima.models.notification.Notification":{"delete":[10,2,1,""],content:[10,3,1,""],href:[10,3,1,""],href_blank:[10,3,1,""],id:[10,3,1,""],seen:[10,3,1,""],time:[10,3,1,""],toggle_seen:[10,2,1,""],type:[10,3,1,""]},"Sakurajima.models.recommendation":{RecommendationEntry:[11,1,1,""]},"Sakurajima.models.recommendation.RecommendationEntry":{airing_start:[11,3,1,""],anime_id:[11,3,1,""],cover:[11,3,1,""],cur_episodes:[11,3,1,""],d_status:[11,3,1,""],episodes_max:[11,3,1,""],get_anime:[11,2,1,""],has_special:[11,3,1,""],progress:[11,3,1,""],recommendations:[11,3,1,""],title:[11,3,1,""],type:[11,3,1,""]},"Sakurajima.models.relation":{Relation:[12,1,1,""],RelationEntry:[13,1,1,""]},"Sakurajima.models.relation.Relation":{description:[12,3,1,""],entries:[12,3,1,""],relation_id:[12,3,1,""],title:[12,3,1,""]},"Sakurajima.models.relation.RelationEntry":{airing_start:[13,3,1,""],anime_id:[13,3,1,""],completed:[13,3,1,""],cover:[13,3,1,""],cur_episodes:[13,3,1,""],episodes_max:[13,3,1,""],has_nudity:[13,3,1,""],progress:[13,3,1,""],title:[13,3,1,""],type:[13,3,1,""]},"Sakurajima.models.stats":{AniwatchStats:[3,1,1,""]},"Sakurajima.models.stats.AniwatchStats":{new_registered_users:[3,3,1,""],new_registered_users_graph_data:[3,3,1,""],registered_users:[3,3,1,""],registered_users_graph_data:[3,3,1,""],total_1080p_streams:[3,3,1,""],total_360p_streams:[3,3,1,""],total_480p_streams:[3,3,1,""],total_720p_streams:[3,3,1,""],total_animes:[3,3,1,""],total_hentais:[3,3,1,""],total_movies:[3,3,1,""],total_shows:[3,3,1,""],total_specials:[3,3,1,""],total_streams:[3,3,1,""],total_unknowns:[3,3,1,""]},"Sakurajima.models.user_models":{Friend:[6,1,1,""],UserAnimeListEntry:[14,1,1,""],UserOverview:[15,1,1,""],UserOverviewStats:[16,1,1,""],UserOverviewWatchType:[17,1,1,""]},"Sakurajima.models.user_models.Friend":{get_chronicle:[6,2,1,""],get_overview:[6,2,1,""],unfriend:[6,2,1,""]},"Sakurajima.models.user_models.UserAnimeListEntry":{airing_start:[14,3,1,""],anime_id:[14,3,1,""],cover:[14,3,1,""],cur_episodes:[14,3,1,""],episodes_max:[14,3,1,""],get_anime:[14,2,1,""],progress:[14,3,1,""],status:[14,3,1,""],title:[14,3,1,""],type:[14,3,1,""]},"Sakurajima.models.user_models.UserOverview":{admin:[15,3,1,""],anime:[15,3,1,""],cover:[15,3,1,""],friend:[15,3,1,""],hentai:[15,3,1,""],movie:[15,3,1,""],special:[15,3,1,""],staff:[15,3,1,""],stats:[15,3,1,""],title:[15,3,1,""],username:[15,3,1,""]},"Sakurajima.models.user_models.UserOverviewStats":{mean_score:[16,3,1,""],ratings:[16,3,1,""],total:[16,3,1,""],total_episodes:[16,3,1,""],watched_days:[16,3,1,""],watched_hours:[16,3,1,""]},"Sakurajima.models.user_models.UserOverviewWatchType":{episodes:[17,3,1,""],total:[17,3,1,""]},Sakurajima:{api:[18,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","attribute","Python attribute"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute"},terms:{"1080p":[3,5],"360p":[3,5],"480p":[3,5],"720p":[3,5],"case":1,"class":[1,2,3,4,5,6,7,8,10,11,12,13,14,15,16,17,18],"default":[1,5,6,18],"function":[5,18],"int":[1,5,6,18],"new":5,"null":18,"return":[1,4,5,6,8,10,11,14,18],"true":[1,4,5,6,8,10],For:[5,11,13,14,18],The:[1,2,3,4,5,6,7,8,10,11,12,13,14,15,16,17,18],Use:1,Used:5,Using:5,abil:18,access:[1,5,18],accord:18,account:[10,18],add:1,add_recommend:[1,18],added:5,addit:[1,18],admin:15,administr:15,affect:5,after:5,air:[1,5,10,11,13,14,18],airing_start:[11,13,14],ajax:18,all:[1,3,5,8,16,18],almost:1,alreadi:14,also:[5,18],altern:18,amount:1,ani:3,anim:[0,3,4,5,7,9,10,11,13,14,15,16,18],anime_id:[1,4,5,7,11,13,14,18],anime_nam:[5,18],anime_titl:[4,5],anititl:5,aniwatch:[1,3,5,6,14,15,18],aniwatchepisod:[0,5,9,18],aniwatchstat:[0,9,18],annd:16,api:[1,5,18],api_url:[1,4,5],apihandl:18,argument:5,around:18,arrang:18,associ:[1,2,5,10],attribut:1,auth:18,authtoken:18,avail:[1,2,5,18],backend:1,base_model:[1,2,5],becaus:5,been:5,belon:7,belong:[2,5,17,18],benefit:5,between:1,bodi:10,bool:[1,4,5,6,8,10,18],breif:[],brief:18,call:[1,5],can:[1,5,13,14,18],categori:[3,7,16],caus:5,certain:5,chart:18,check:18,checkout:18,choos:18,chronicl:[1,4,6,18],chronicle_id:[4,18],chronicleentri:[0,1,6,9,18],chunk:5,classmethod:18,cober:15,com:[],combin:5,come:5,complet:[1,13,18],configur:18,connect:5,consol:5,constructor:18,contain:[1,7,8,18],content:[0,10,18],convini:1,core:18,correspond:18,cover:[11,13,14,15],creat:4,cur_episod:[11,13,14],current:[1,5,11,18],d_statu:11,dai:16,data:[1,3,5,6,8,16,17,18],data_dict:[1,2,3,4,5,6,7,8,10,11,12,13,14,15,16,17],date:[1,4,5,18],delet:[5,10,18],delete_all_notif:18,delete_chunk:5,delete_notif:18,descript:[1,5,12,18],detail:[1,18],detail_id:1,dict:[1,18],dictionari:[1,18],differ:16,directori:5,disabl:5,doc:[],document:18,doe:[1,18],don:3,done:5,dowload:5,download:[5,18],drop:[1,18],durat:5,each:[1,18],edg:1,els:5,enabl:5,end:[7,8,18],endpoint:18,english:18,engsub:[],entri:[4,7,8,12,14,18],ep_id:5,ep_titl:4,epiosod:13,episod:[0,1,2,4,9,10,11,13,14,16,17,18],episode_id:[2,18],episode_numb:[1,5],episodelist:[1,18],episodes_max:[11,13,14],eptitl:5,error:[1,4,5,6,8,10],especi:5,etc:[1,6,8,14,15,16,18],everi:5,exact:5,exampl:[5,8,10,11,13,14],fall:3,fals:[1,4,5,6,8,10,18],faster:5,favorit:[8,18],favorite_media:[8,18],feasibl:5,few:1,ffmpeg:5,figur:11,file:[5,18],file_nam:5,filler:5,form:1,friend:[0,9,15],from:[1,4,6,10,16,18],fullhd:5,further:18,gener:[4,17],get:[1,5,6,11,14,18],get_airing_anim:18,get_anim:[11,14,18],get_anime_chronicl:18,get_aniwatch_episod:5,get_available_qu:5,get_best_rated_anim:18,get_chronicl:[1,6],get_complete_object:1,get_dict:1,get_episod:[1,18],get_episode_by_numb:1,get_latest_anim:18,get_latest_releas:18,get_latest_upload:18,get_m3u8:5,get_media:[1,18],get_notif:18,get_overview:6,get_popular_anim:18,get_popular_seasonal_anim:18,get_popular_upcoming_anim:18,get_random_anim:18,get_recommend:[1,18],get_rel:[1,18],get_seasonal_anim:18,get_stat:18,get_unread_notif:18,get_user_anime_list:18,get_user_chronicl:18,get_user_media:18,get_user_overview:18,get_watchlist:18,github:[],given:[16,18],graph:3,has:[1,5,6,8,10,11,13,14,15,16,18],has_nud:13,has_speci:11,have:[3,5,8,11,13,14,18],hentai:[3,15],highest:18,histori:[1,4,6,18],hold:[1,16,17,18],hour:[15,16,18],how:18,howev:[5,18],href:10,href_blank:10,http:18,imag:[11,14,15],includ:[5,15,16,18],include_intro:5,index:[0,1,18],inform:18,initi:1,inord:18,instruct:18,intro:5,is_air:5,is_favorit:8,issu:[5,10,11],item:18,its:18,join:3,json:1,keep:5,kei:18,know:11,lamguag:18,lang:[5,18],languag:[2,5,18],latest:18,left:5,let:[5,11],librari:18,like:[1,6,7,8,15,16,18],list:[1,2,5,6,14,18],live:5,m3u8:5,macro:5,mai:5,mani:1,mark:[1,5,8,18],mark_all_notifications_as_read:18,mark_as_complet:[1,18],mark_as_drop:[1,18],mark_as_on_hold:[1,18],mark_as_plan_to_watch:[1,18],mark_as_watch:[1,18],max_thread:5,maximum:[1,5],mayb:4,mean:[6,16],mean_scor:16,media:[0,1,8,9,18],media_id:[8,18],mediaentri:[0,9,18],method:[1,5],miss:18,model:[0,1,2,3,4,5,6,7,8,10,11,12,13,14,15,16,17],modul:0,more:4,movi:[3,11,13,14,15,16,18],mp4:5,multi:5,multi_thread:5,multithread:5,name:[5,18],need:5,neg:5,network:[1,4,5,6,7,8,10,11,14],never:1,new_registered_us:3,new_registered_users_graph_data:3,none:[5,18],normal:[1,18],note:5,notic:5,notif:[0,9,18],notification_id:18,notificaton:18,nottif:10,nuditi:13,number:[1,3,4,5,8,11,13,14,15,16,17,18],object:[1,2,4,5,6,11,14,15,18],objetc:18,occur:[1,4,5,6,8,10],off:5,offer:5,offici:7,on_progress:5,onc:5,one:5,onli:5,open:[1,7,8,11,18],oper:[1,4,5,6,8,10],option:[1,5,6,18],order:5,ost:[1,7,18],our:11,out:[11,18],overview:[6,15,18],page:[0,1,6,18],param:18,paramet:[1,5,6,18],particul:17,particular:[1,17,18],pass:5,path:5,per:5,perform:5,plan:[1,18],playback:5,player:5,pleas:11,popular:18,possibl:1,prefer:18,print:5,print_progress:5,profil:[6,15],progress:[11,13,14,18],properti:[5,18],provid:[1,18],proxi:18,proxy_fil:18,qualiti:[5,18],queri:18,question:5,random:18,rate:[1,16,18],rateanim:18,read:18,reccomend:1,reccomendationentri:18,recent:[3,10],recommen:11,recommend:[1,5,11,13,18],recommendationentri:[0,1,9,18],recommended_anime_id:[1,18],recommened:11,refer:5,regard:[5,6,16,17,18],regist:[3,5],registered_us:3,registered_users_graph_data:3,relat:[0,1,4,8,9,13,18],relation_id:[12,18],relationentri:[0,9],releas:18,relev:[1,8,18],remov:[1,4,6,18],remove_chronicle_entri:[4,18],remove_from_list:[1,18],replac:5,repo:11,report:18,report_missing_anim:18,report_missing_stream:18,repres:[1,4,6,8,14,15,18],requir:[1,5,18],respect:[5,18],respons:1,result:5,resumabilti:5,saga:5,sai:5,sakurajima:[1,2,3,4,5,6,7,8,10,11,12,13,14,15,16,17],same:18,score:[6,16,18],script:5,search:[0,18],season:[11,13,14,18],second:5,seen:[10,18],select:5,seri:4,set:[1,5,18],should:1,show:[3,6,14,15,16,17],signific:5,similar:[1,18],singl:[1,4,5,8,14,18],site:18,skip:5,slower:5,smaller:5,some:18,sometim:1,song:7,sound:7,special:[3,11,13,14,15,16,18],specif:[1,4,18],staff:15,star:18,start:[11,13,14,18],stat:[3,15,16,18],statist:18,statu:[5,8,10,13,14,18],store:18,str:[1,5,18],stream:[2,3,5,18],strean:18,string:5,sub:18,submit:18,success:[1,4,5,6,8,10],sum:3,support:5,suppos:5,synonym:18,syntax:1,taken:5,target:18,thei:5,theme:7,theme_song:7,therefor:5,thi:[1,3,5,10,11,14,15,16,18],thing:[6,15,18],third:5,those:18,thread:5,thumbnail:[5,8],time:[5,6,10,16,18],titl:[1,4,5,8,11,12,13,14,15,18],toggl:[5,10,18],toggle_mark_as_watch:[5,18],toggle_notification_seen:18,toggle_seen:10,token:18,too:18,total:[3,5,6,11,13,14,15,16,17,18],total_1080p_stream:3,total_360p_stream:3,total_480p_stream:3,total_720p_stream:3,total_anim:3,total_episod:16,total_hentai:3,total_movi:3,total_show:3,total_speci:3,total_stream:3,total_unknown:3,track:[1,4,6,7,18],trade:5,troll:5,type:[1,4,5,6,8,10,11,13,14,15,17,18],unfriend:6,unread:18,upload:18,url:[5,8,10,11,13,14,15],use:18,use_ffmpeg:5,used:[1,5,18],user:[1,3,4,5,6,8,10,11,13,14,15,16,18],user_id:18,user_model:[6,14,15,16,17],user_overview:6,useranimelistentri:[0,9,18],userid:18,usermedia:18,usernam:[15,18],useroverview:[0,6,9,18],useroverviewstat:[0,9,15],useroverviewwatchtyp:[0,9,15],using:[1,5],using_proxi:18,valu:[1,18],veri:[1,18],veselysp:[],video:5,vinland:5,wai:18,want:[1,5,6,18],watch:[1,4,5,6,13,14,15,16,17,18],watched_dai:16,watched_hour:16,watchlist:18,weekdai:18,when:[5,11,13],where:[1,5,18],which:[1,2,7,18],who:[3,8],whose:[5,18],wiki:18,work:5,would:18,wrap:[1,18],wrapper:18,year:18,yet:18,you:[1,5,6,11,18],your:[5,18],zero:18},titles:["Welcome to Sakurajima\u2019s documentation!","Anime","AniWatchEpisode","AniwatchStats","ChronicleEntry","Episode","Friend","Media","MediaEntry","Models","Notification","RecommendationEntry","Relation","RelationEntry","UserAnimeListEntry","UserOverview","UserOverviewStats","UserOverviewWatchType","Sakurajima"],titleterms:{anim:1,aniwatchepisod:2,aniwatchstat:3,chronicleentri:4,document:0,episod:5,friend:6,indic:0,media:7,mediaentri:8,model:9,notif:10,recommendationentri:11,relat:12,relationentri:13,sakurajima:[0,18],tabl:0,useranimelistentri:14,useroverview:15,useroverviewstat:16,useroverviewwatchtyp:17,welcom:0}})