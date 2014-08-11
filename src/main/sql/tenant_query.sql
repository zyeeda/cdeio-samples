SELECT d.* from (

(select  t.* from CDE_DOCUMENT  t
inner join ZDA_FUNNEL_DATA fd on  (t.f_id = fd.F_data_id)
inner join ZDA_FUNNEL f on (fd.f_funnel_id = f.F_id)
inner join ZDA_FUNNEL_ACCOUNT fa on (f.f_id = fa.f_funnel_id)
inner join ZDA_ACCOUNT a on (a.f_id = fa.f_account_id)

where fd.F_DATA_TYPE = 'com.zyeeda.coala.example.tenant.entity.Document' 
and  a.f_account_name = 'liu' and f.f_type = 'com.zyeeda.coala.example.tenant.entity.Folder'
)

UNION ALL 

(select  t.* from CDE_DOCUMENT  t
inner join ZDA_FUNNEL_DATA fd on  (t.f_id = fd.F_data_id)
inner join ZDA_FUNNEL f on (fd.f_funnel_id = f.F_id)
inner join ZDA_FUNNEL_ACCOUNT fa on (f.f_id = fa.f_funnel_id)
inner join ZDA_ACCOUNT a on (a.f_id = fa.f_account_id)

where fd.F_DATA_TYPE = 'com.zyeeda.coala.example.tenant.entity.Document' 
and  a.f_account_name = 'liu' and f.f_type = 'com.zyeeda.coala.example.tenant.entity.Project'
)

) AS d GROUP BY d.f_id HAVING count(d.f_id) >= 2;