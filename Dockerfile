FROM zyeeda/java:latest

EXPOSE 8080 8443

ENV MAVEN_OPTS -Dfile.encoding=UTF-8

COPY docker-entrypoint.sh /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]

CMD ["mvn", "jetty:run"]

