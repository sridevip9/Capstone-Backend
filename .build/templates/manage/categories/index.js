(function(dust){dust.register("manage\/categories\/index",body_0);var blocks={"body":body_1};function body_0(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.p("layouts/manage",ctx,ctx,{});}body_0.__dustBody=!0;function body_1(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.w("<h2> Categories</h2><p><a href=\"/manage/categories/add\"> Add Category </a></p><table><thead><tr><th width=\"200\"> ID </th><th width=\"200\"> Category Name</th><th width=\"180\"> </th><th width=\"180\">  </th></tr><thread><tbody>").s(ctx.get(["categories"], false),ctx,{"block":body_2},{}).w("</tbody></table>");}body_1.__dustBody=!0;function body_2(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.w("<tr><td>").f(ctx.getPath(true, ["_id"]),ctx,"h").w("</td><td>").f(ctx.getPath(true, ["name"]),ctx,"h").w("</td><td> <a class=\"button \" href= \"/manage/categories/edit/").f(ctx.getPath(true, ["_id"]),ctx,"h").w("\"> Edit </a></td><td> <form method=\"post\" action =\"/manage/categories/delete/").f(ctx.getPath(true, ["_id"]),ctx,"h").w("\"><input type=\"submit\" value=\"Delete\" class=\"button alert\" /> <input type=\"hidden\" name=\"_csrf\" value=\"").f(ctx.get(["_csrf"], false),ctx,"h").w("\" /><input type=\"hidden\" name=\"_method\" value=\"DELETE\" /></form></td></tr>");}body_2.__dustBody=!0;return body_0}(dust));