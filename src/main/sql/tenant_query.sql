
select * from (select  d.* from CDE_DOCUMENT d 
inner join CDE_DATA_TENANT dt on  (d.f_id = dt.F_data_id)
inner join CDE_TENANT t on (dt.Tenant_id = t.F_id)
inner join CDE_USER_TENANT ut on (t.f_id = ut.tenant_id)
inner join CDE_USER u on (u.f_id = ut.user_id)

where dt.F_DATA_TYPE = 'CDE_DOCUMENT' and  u.f_name = '刘镇伟' and t.f_type = 'Project'
) a
inner join  (
select  d.* from CDE_DOCUMENT d 
inner join CDE_DATA_TENANT dt on  (d.f_id = dt.F_data_id)
inner join CDE_TENANT t on (dt.Tenant_id = t.F_id)
inner join CDE_USER_TENANT ut on (t.f_id = ut.tenant_id)
inner join CDE_USER u on (u.f_id = ut.user_id)

where dt.F_DATA_TYPE = 'CDE_DOCUMENT' and  u.f_name = '刘镇伟' and
t.f_type = 'Folder'
) b on a.F_id = b.F_id;

--或者--

SELECT t.* from (
  (select  d.* from CDE_DOCUMENT d 
inner join CDE_DATA_TENANT dt on  (d.f_id = dt.F_data_id)
inner join CDE_TENANT t on (dt.Tenant_id = t.F_id)
inner join CDE_USER_TENANT ut on (t.f_id = ut.tenant_id)
inner join CDE_USER u on (u.f_id = ut.user_id)

where dt.F_DATA_TYPE = 'CDE_DOCUMENT' and  u.f_name = '王家卫' and t.f_type = 'Project'
)
  UNION ALL 
  (select  d.* from CDE_DOCUMENT d 
inner join CDE_DATA_TENANT dt on  (d.f_id = dt.F_data_id)
inner join CDE_TENANT t on (dt.Tenant_id = t.F_id)
inner join CDE_USER_TENANT ut on (t.f_id = ut.tenant_id)
inner join CDE_USER u on (u.f_id = ut.user_id)

where dt.F_DATA_TYPE = 'CDE_DOCUMENT' and  u.f_name = '王家卫' and t.f_type = 'Folder'
) 
) AS t GROUP BY t.f_id HAVING count(t.f_id) >= 2;